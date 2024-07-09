const users = [
    {
        id: 0,
        Name: "Sidharth Verma",
        age: 22
    },
    {
        id: 1,
        Name: "Shivanshu",
        age: 20
    }
];

// GET all users
export const getUsers = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    });
};

// GET user by ID
export const getUserById = (req, res) => {
    const id = req.params.id*1;
    const user = users.find((el) => el.id === id);
    
    if (user) {
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } else {
        res.status(404).json({
            status: "fail",
            message: "User not found"
        });
    }
};

// POST to create a new user
export const createUser = (req, res) => {
    const newUser = {
        id: users.length,
        Name: req.body.Name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json({
        status: "success",
        data: {
            user: newUser
        }
    });
};
export const updateUser = (req, res) => {
    const id = req.params.id*1
    const user = users.find((el) => el.id === id);
    const {Name, age} = req.body
    if(Name){
        user.Name = Name;
    }
    if(age){
        user.age = age;
    }
    res.send(`User with ${id} has been updated`)
}
export const deleteUser = (req, res) => {
    const id = req.params.id * 1;
    const userIndex = users.findIndex((el) => el.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "User not found"
        });
    }
    
    users.splice(userIndex, 1);
    
    res.status(204).json({
        status: "success",
        data: null
    });
};