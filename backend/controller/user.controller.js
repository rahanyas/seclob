export const signIn = (req, res) => {
   const {userName, email, password} = req.body;
   console.log(userName, email, password);
   
}