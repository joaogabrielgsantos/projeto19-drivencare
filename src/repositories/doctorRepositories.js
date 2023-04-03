import connectionDb from "../config/database.js"



async function findByUserId({ userId }) {
    return await connectionDb.query(`
    SELECT * FROM doctors WHERE "userId" = $1
    
    `, [userId]
    );
}



async function create({ crm, specialtyId, userId  }) {
    return await connectionDb.query(`
    INSERT INTO doctors (crm, "specialtyId", "userId") 
    VALUES ($1, $2, $3)
    
    `, [crm, specialtyId, userId]
    );
}




export default {
    findByUserId,
    create
    
}