
const user = require('../Models/userModel');

const bcrypt = require('bcrypt');


module.exports.login = async (req, res, next) => {
  try {
    const { usernames, password } = req.body;
    const User = await user.findOne({ usernames });
    if (!User)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, User.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete User.password;
    return res.json({ status: true, User });
  } catch (ex) {
    next(ex);
  }
};
module.exports. register = async (req, res , next) =>{


     try{

       

        const {usernames, email, password} = req.body;

        const usernameCheck = await user.findOne({usernames});

           if(usernameCheck)

              
                 return res.json({msg:"username already exists please try again", status: false});

           
           
            const emailCheck  = await user.findOne({email});

           if(emailCheck)

               return res.json({msg: "email already exists", status: false});

           

           

           const hashed = await bcrypt.hash(password, 10);

            const Users = await user.create({

              
           email,
           usernames,
           password: hashed,


           });

           delete Users.password;

           return res.json({status: true, Users});


     }catch(ex){

         next(ex);   
     }
};






