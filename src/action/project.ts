"use server";

import { redirect } from "next/navigation";
import { onAuthenticateUser } from "./auth";
import { prismaClient } from "@/config/prismaClient";


export async function getRecentProjects() {
  try {
    const { user } = await onAuthenticateUser();

    if (!user) {
      redirect("/sign-in");
    }

    const projects = await prismaClient.project.findMany({
      where: {
        userId: user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });

    return projects;
  } catch (error) {
    console.log("🔴 Error while getting recent projects", error);
    return [];
  }
}

export async function getAllProjects() {
  try {
    const { user } = await onAuthenticateUser();
    if (!user) {
      redirect("/sign-in");
    }

    const projects = await prismaClient.project.findMany({
      where: {
        userId: user.id,
        isDeleted: false,
      },
    });

    return projects;
  } catch (error) {
    console.log("🔴 Error while getting all projects", error);
    return [];
  }
}

export async function deleteProject(projectId: string) {
  try {
    const { user } = await onAuthenticateUser();
    if (!user) {
      redirect("/sign-in");
    }

    const project = await prismaClient.project.update({
      where: {
        userId: user.id,
        id: projectId,
      },
      data: {
        isDeleted: true,
      },
    });

    return { status: 200, data: { ...project } };
  } catch (error) {
    console.log("🔴🔴Error while deleting project", error);
    throw new Error("something went wrong");
  }
}
