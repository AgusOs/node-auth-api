import bcrypt from "bcrypt";

const SALT_ROUNDS: number = 10

//Hashea
export const hashPasword = async(password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS  )
}

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}