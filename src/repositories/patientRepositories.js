import connectionDb from "../config/database.js"



async function findByUserId({ userId }) {
    return await connectionDb.query(`
    SELECT * FROM patients WHERE "userId" = $1
    
    `, [userId]
    );
}



async function create({ cpf, userId  }) {
    return await connectionDb.query(`
    INSERT INTO patients (cpf,"userId") 
    VALUES ($1, $2)
    
    `, [cpf, userId]
    );
}




export default {
    findByUserId,
    create
    
}