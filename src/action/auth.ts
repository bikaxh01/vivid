import { prismaClient } from "@/config/prismaClient";
import { currentUser } from "@clerk/nextjs/server";

export async function onAuthenticateUser() {
  try {
    const userData = await currentUser();

    if (!userData) {
      return { status: 403 };
    }

    const existUser = await prismaClient.user.findUnique({
      where: {
        clerkId: userData.id,
      },
    });

    if (existUser) {
      return { status: 201, user: existUser };
    }

    const createUser = await prismaClient.user.create({
      data: {
        clerkId: userData.id,
        email: userData.emailAddresses[0].emailAddress,
        name: userData.firstName + " " + userData.lastName,
        avatarUrl: userData.imageUrl,
      },
    });

    return { status: 200, user: createUser };
  } catch (error) {
    console.log("🔴 Error in callback ", error);

    return { status: 500 };
  }
}
