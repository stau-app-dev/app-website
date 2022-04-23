type Member = {
  name: string;
  position: string;
  image: string;
  bio: string;
};

type Team = {
  year: string;
  members: Member[];
};

export default Team;
