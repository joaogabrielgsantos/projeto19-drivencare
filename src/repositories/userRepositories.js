import connectionDb from "../config/database.js"



async function findByEmail({ email }) {
    return await connectionDb.query(`
    SELECT * FROM users WHERE email = $1
    
    `, [email]
    );
}

async function findPostalCode({ postalCode }) {
    return await connectionDb.query(`
    SELECT * FROM addresses WHERE "postalCode" = $1
    
    `, [postalCode]
    );
}

async function createAddress({ postalCode, cityId }) {
    return await connectionDb.query(`
    INSERT INTO addresses ("postalCode", "cityId") 
    VALUES ($1, $2)
    
    `, [postalCode, cityId]
    );
}


async function create({ name, email, password, typeId, addressId }) {
    return await connectionDb.query(`
    INSERT INTO users (name, email, password, "typeId", "addressId") 
    VALUES ($1, $2, $3, $4, $5)
    
    `, [name, email, password, typeId, addressId]
    );
}


async function createSession({ token, userId }) {
    await connectionDb.query(`
    INSERT INTO sessions (token, "userId") 
    VALUES ($1, $2)
    
    `, [token, userId]
    );

}


export default {
    findByEmail,
    findPostalCode,
    createAddress,
    create,
    createSession
}