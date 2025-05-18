import userModal from "../modal/user.modal.js";

export const signIn = async (req, res) => {
   const {userName, email, password} = req.body;
  //  console.log(userName, email, password);
   try {
    const isExistingUser = await userModal.findOne({email});
    if(isExistingUser){
      return res.status(400).json({msg : 'user already exists'})
    };
    const newUser = await userModal.create({
      userName,
      email,
      password
    });
    if(!newUser){
      return res.status(400).json({msg : 'error occured while creating user'})
    };
    return res.status(200).json({msg : 'successfulyy signed in'})
   } catch (err) {
      console.log('error in signIn controller', err);
      return res.status(500).json({msg : 'Internal server error'})
   }
};

