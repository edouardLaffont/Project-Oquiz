const client = require('../database');

class CoreModel {
  _id;

  constructor(obj) {
    this._id = obj.id;
  }

  static findAll(callback) {
  
    const query = `SELECT * FROM "${this.tableName}";`;

    client.query(query, (err, result) => {
      if (err) {
        callback('il y a eu une erreur sur la requête des users', null);
      }
      else {
        let instances = [];

        for (const row of result.rows) {
         
          const instance = new this(row);

          instances.push(instance);
        }

        callback(null, instances);
      }
    });
  }

  static findById(id, callback) {
    const query = {
      text: `SELECT * FROM "${this.tableName}" WHERE id = $1::int;`,
      values: [id],
    };

    client.query(query, (err, result) => {
      if (err) {
        callback(`impossible de récupérer le ${this.tableName}, vérifiez votre requête`, null);
      }
      else if(!result.rows[0]) {
        callback(`l'id demandé n'existe plus dans la table ${this.tableName}`, null);
      }
      else {
        const instance = new this(result.rows[0]);
        callback(null, instance);
      }
    });
  }

  static findBy(params, callback) {
    
    const sqlConditions = [];
   
    const values = [];

    const paramsProperties = Object.keys(params);
    paramsProperties.forEach((property, index) => {
    
      const condition = `"${property}" = $${index + 1}`;

      sqlConditions.push(condition);
      values.push(params[property]);
    });

    let whereConditions = '';

    
    if (sqlConditions.length) {
      whereConditions = `WHERE ${sqlConditions.join(' OR ')}`;
    }

    const query = {
      text: `
        SELECT * FROM "${this.tableName}" ${whereConditions}
      `,
      values: values
    }

    client.query(query, (err, result) => {
      if (err) {
        callback('Une erreur s\'est produite sur findBy', null);
      }
      else {
        let instances = [];

        for (const row of result.rows) {
          
          const instance = new this(row);

          instances.push(instance);
        }

        callback(null, instances);
      }
    });
  }

  save(callback) {
    
    if (this.id) {
      this.update(callback);
    }
    else {
      this.insert(callback);
    }
  }

  insert(callback) {
   
    const fields = [];

    const placeholders = [];

    const values = [];

    for(let property in this) {
    
      if (property === '_id') {
        continue;
      }

      property = property.substr(1);

      fields.push(`"${property}"`);

      placeholders.push(`$${fields.length}`);

      values.push(this[property]);
    }

    const query = {
      text: `
        INSERT INTO "${this.constructor.tableName}"
        (${fields})
        VALUES (${placeholders})
        RETURNING "id"
      `,
      values: values
    };

    client.query(query, (err, result) => {
      if (err) {
        callback('une erreur est survenue, l\'insertion n\'a pas été faite', null);
      }
      else {
        this.id = result.rows[0].id;
        callback(null, this);
      }
    });
  }

  update(callback) {
    const properties = Object.keys(this);

    const sets = [];
    const values = [];
    let indexPlaceHolder = 1;

    properties.forEach(property => {
      if (property === '_id') {
        return;
      }

      property = property.substr(1);

      sets.push(`"${property}" = $${indexPlaceHolder}`);
      indexPlaceHolder++;

      values.push(this[property]);
    });

    values.push(this.id);

    const query = {
      text: `
        UPDATE "${this.constructor.tableName}" SET
        ${sets}
        WHERE id = $${values.length}
      `,
      values: values
    };

    client.query(query, (err, result) => {
      if (err) {
        callback('Update non effectué', null);
      }
      else {
        callback(null, this);
      }
    });
  }

  delete(callback) {
    const query = {
      text: `
        DELETE FROM "${this.constructor.tableName}" WHERE id = $1;
      `,
      values: [this.id]
    };

    client.query(query, (err, result) => {
      if (err) {
        callback(`Erreur lors de la suppression ${this.constructor.tableName}`, null);
      }
      else {
        callback(null, true);
      }
    });
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (isNaN(parseInt(value, 10))) {
      throw Error("CoreModel.id doit être un integer !");
    }

    this._id = value;
  }
}

module.exports = CoreModel;