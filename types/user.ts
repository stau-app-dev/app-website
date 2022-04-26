type AuthUser = {
  uid: string;
  email: string;
};

type User = {
  badges: string[];
  courses: string[];
  clubs: string[];
  email: string;
  msgTokens: string[];
  name: string;
  notifications: string[];
  picture: number;
  showBadges: boolean;
  showCourses: boolean;
  status: number;
};

export { AuthUser, User };
