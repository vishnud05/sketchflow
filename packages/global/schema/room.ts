import { z } from "zod";

const CreateRoomSchema = z.object({
  name: z.string().min(2).max(20),
});

export { CreateRoomSchema };
