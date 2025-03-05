import List from "./list";
import StatsCard from "./stats-card";

const Stats = () => {
  return (
    <List>
      <StatsCard title="Total Projects" value="42" />
      <StatsCard title="Active Tasks" value="156" />
      <StatsCard title="Team Teams" value="28" />
      <StatsCard title="Completion Rate" value="78%" />
      <StatsCard title="Today's Commits" value="10" />
    </List>
  );
};
export default Stats;
