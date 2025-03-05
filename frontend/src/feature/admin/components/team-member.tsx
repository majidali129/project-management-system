const TeamMemberCard = ({ team }) => {
  const { name, role, avatar, taskCompletion, activeProjects } = team;

  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <img
        className="h-10 w-10 rounded-full"
        src={avatar || "/placeholder.svg"}
        alt={name}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-sm text-gray-500 truncate">{role}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500">{taskCompletion}% Tasks</p>
        <p className="text-sm text-gray-500">{activeProjects} Projects</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
