//When destructuring a variable you need to add an explicit declaration of the types
//associated with the paramaters again

export const login = async ({
    username,
    password
}: {
    username: string;
    password: string;
}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "harry" && password === "password") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};
