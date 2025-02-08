```javascript
import {unstable_getServerSession} from "next-auth";
import {options} from './api/auth/[...nextauth]' // Import options from your next-auth config

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, options);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Your protected route logic here
  return res.status(200).json({ message: "Success", session });
};

export default handler;
```