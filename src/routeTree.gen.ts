/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as RoomeditIdImport } from "./routes/room_edit/$id";
import { Route as ProfileviewIdImport } from "./routes/profile_view/$id";

// Create Virtual Routes

const UsersLazyImport = createFileRoute("/users")();
const UserscheduleLazyImport = createFileRoute("/user_schedule")();
const ScheduleLazyImport = createFileRoute("/schedule")();
const RoomsaddLazyImport = createFileRoute("/rooms_add")();
const RoomsLazyImport = createFileRoute("/rooms")();
const BookedroomsLazyImport = createFileRoute("/booked_rooms")();
const BacklogsLazyImport = createFileRoute("/backlogs")();
const ArchiveLazyImport = createFileRoute("/archive")();
const IndexLazyImport = createFileRoute("/")();

// Create/Update Routes

const UsersLazyRoute = UsersLazyImport.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/users.lazy").then((d) => d.Route));

const UserscheduleLazyRoute = UserscheduleLazyImport.update({
  id: "/user_schedule",
  path: "/user_schedule",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/user_schedule.lazy").then((d) => d.Route)
);

const ScheduleLazyRoute = ScheduleLazyImport.update({
  id: "/schedule",
  path: "/schedule",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/schedule.lazy").then((d) => d.Route));

const RoomsaddLazyRoute = RoomsaddLazyImport.update({
  id: "/rooms_add",
  path: "/rooms_add",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/rooms_add.lazy").then((d) => d.Route));

const RoomsLazyRoute = RoomsLazyImport.update({
  id: "/rooms",
  path: "/rooms",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/rooms.lazy").then((d) => d.Route));

const BookedroomsLazyRoute = BookedroomsLazyImport.update({
  id: "/booked_rooms",
  path: "/booked_rooms",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/booked_rooms.lazy").then((d) => d.Route));

const BacklogsLazyRoute = BacklogsLazyImport.update({
  id: "/backlogs",
  path: "/backlogs",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/backlogs.lazy").then((d) => d.Route));

const ArchiveLazyRoute = ArchiveLazyImport.update({
  id: "/archive",
  path: "/archive",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/archive.lazy").then((d) => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

const RoomeditIdRoute = RoomeditIdImport.update({
  id: "/room_edit/$id",
  path: "/room_edit/$id",
  getParentRoute: () => rootRoute,
} as any);

const ProfileviewIdRoute = ProfileviewIdImport.update({
  id: "/profile_view/$id",
  path: "/profile_view/$id",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/archive": {
      id: "/archive";
      path: "/archive";
      fullPath: "/archive";
      preLoaderRoute: typeof ArchiveLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/backlogs": {
      id: "/backlogs";
      path: "/backlogs";
      fullPath: "/backlogs";
      preLoaderRoute: typeof BacklogsLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/booked_rooms": {
      id: "/booked_rooms";
      path: "/booked_rooms";
      fullPath: "/booked_rooms";
      preLoaderRoute: typeof BookedroomsLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/rooms": {
      id: "/rooms";
      path: "/rooms";
      fullPath: "/rooms";
      preLoaderRoute: typeof RoomsLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/rooms_add": {
      id: "/rooms_add";
      path: "/rooms_add";
      fullPath: "/rooms_add";
      preLoaderRoute: typeof RoomsaddLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/schedule": {
      id: "/schedule";
      path: "/schedule";
      fullPath: "/schedule";
      preLoaderRoute: typeof ScheduleLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/user_schedule": {
      id: "/user_schedule";
      path: "/user_schedule";
      fullPath: "/user_schedule";
      preLoaderRoute: typeof UserscheduleLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/users": {
      id: "/users";
      path: "/users";
      fullPath: "/users";
      preLoaderRoute: typeof UsersLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/profile_view/$id": {
      id: "/profile_view/$id";
      path: "/profile_view/$id";
      fullPath: "/profile_view/$id";
      preLoaderRoute: typeof ProfileviewIdImport;
      parentRoute: typeof rootRoute;
    };
    "/room_edit/$id": {
      id: "/room_edit/$id";
      path: "/room_edit/$id";
      fullPath: "/room_edit/$id";
      preLoaderRoute: typeof RoomeditIdImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexLazyRoute;
  "/archive": typeof ArchiveLazyRoute;
  "/backlogs": typeof BacklogsLazyRoute;
  "/booked_rooms": typeof BookedroomsLazyRoute;
  "/rooms": typeof RoomsLazyRoute;
  "/rooms_add": typeof RoomsaddLazyRoute;
  "/schedule": typeof ScheduleLazyRoute;
  "/user_schedule": typeof UserscheduleLazyRoute;
  "/users": typeof UsersLazyRoute;
  "/profile_view/$id": typeof ProfileviewIdRoute;
  "/room_edit/$id": typeof RoomeditIdRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexLazyRoute;
  "/archive": typeof ArchiveLazyRoute;
  "/backlogs": typeof BacklogsLazyRoute;
  "/booked_rooms": typeof BookedroomsLazyRoute;
  "/rooms": typeof RoomsLazyRoute;
  "/rooms_add": typeof RoomsaddLazyRoute;
  "/schedule": typeof ScheduleLazyRoute;
  "/user_schedule": typeof UserscheduleLazyRoute;
  "/users": typeof UsersLazyRoute;
  "/profile_view/$id": typeof ProfileviewIdRoute;
  "/room_edit/$id": typeof RoomeditIdRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexLazyRoute;
  "/archive": typeof ArchiveLazyRoute;
  "/backlogs": typeof BacklogsLazyRoute;
  "/booked_rooms": typeof BookedroomsLazyRoute;
  "/rooms": typeof RoomsLazyRoute;
  "/rooms_add": typeof RoomsaddLazyRoute;
  "/schedule": typeof ScheduleLazyRoute;
  "/user_schedule": typeof UserscheduleLazyRoute;
  "/users": typeof UsersLazyRoute;
  "/profile_view/$id": typeof ProfileviewIdRoute;
  "/room_edit/$id": typeof RoomeditIdRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/archive"
    | "/backlogs"
    | "/booked_rooms"
    | "/rooms"
    | "/rooms_add"
    | "/schedule"
    | "/user_schedule"
    | "/users"
    | "/profile_view/$id"
    | "/room_edit/$id";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/archive"
    | "/backlogs"
    | "/booked_rooms"
    | "/rooms"
    | "/rooms_add"
    | "/schedule"
    | "/user_schedule"
    | "/users"
    | "/profile_view/$id"
    | "/room_edit/$id";
  id:
    | "__root__"
    | "/"
    | "/archive"
    | "/backlogs"
    | "/booked_rooms"
    | "/rooms"
    | "/rooms_add"
    | "/schedule"
    | "/user_schedule"
    | "/users"
    | "/profile_view/$id"
    | "/room_edit/$id";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  ArchiveLazyRoute: typeof ArchiveLazyRoute;
  BacklogsLazyRoute: typeof BacklogsLazyRoute;
  BookedroomsLazyRoute: typeof BookedroomsLazyRoute;
  RoomsLazyRoute: typeof RoomsLazyRoute;
  RoomsaddLazyRoute: typeof RoomsaddLazyRoute;
  ScheduleLazyRoute: typeof ScheduleLazyRoute;
  UserscheduleLazyRoute: typeof UserscheduleLazyRoute;
  UsersLazyRoute: typeof UsersLazyRoute;
  ProfileviewIdRoute: typeof ProfileviewIdRoute;
  RoomeditIdRoute: typeof RoomeditIdRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ArchiveLazyRoute: ArchiveLazyRoute,
  BacklogsLazyRoute: BacklogsLazyRoute,
  BookedroomsLazyRoute: BookedroomsLazyRoute,
  RoomsLazyRoute: RoomsLazyRoute,
  RoomsaddLazyRoute: RoomsaddLazyRoute,
  ScheduleLazyRoute: ScheduleLazyRoute,
  UserscheduleLazyRoute: UserscheduleLazyRoute,
  UsersLazyRoute: UsersLazyRoute,
  ProfileviewIdRoute: ProfileviewIdRoute,
  RoomeditIdRoute: RoomeditIdRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/archive",
        "/backlogs",
        "/booked_rooms",
        "/rooms",
        "/rooms_add",
        "/schedule",
        "/user_schedule",
        "/users",
        "/profile_view/$id",
        "/room_edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/archive": {
      "filePath": "archive.lazy.tsx"
    },
    "/backlogs": {
      "filePath": "backlogs.lazy.tsx"
    },
    "/booked_rooms": {
      "filePath": "booked_rooms.lazy.tsx"
    },
    "/rooms": {
      "filePath": "rooms.lazy.tsx"
    },
    "/rooms_add": {
      "filePath": "rooms_add.lazy.tsx"
    },
    "/schedule": {
      "filePath": "schedule.lazy.tsx"
    },
    "/user_schedule": {
      "filePath": "user_schedule.lazy.tsx"
    },
    "/users": {
      "filePath": "users.lazy.tsx"
    },
    "/profile_view/$id": {
      "filePath": "profile_view/$id.tsx"
    },
    "/room_edit/$id": {
      "filePath": "room_edit/$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
