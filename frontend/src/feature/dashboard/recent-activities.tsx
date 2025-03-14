import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Calendar, CheckCircle2, Clock, MessageSquare, Plus } from "lucide-react";
import { ReactElement } from "react";

interface Activity {
  id: number;
  user: {
    name: string;
    avatar: string;
    initials: string;
  };
  action: string;
  target: string;
  timestamp: string;
  date: string;
  Icon: ReactElement;
  type: string;
}

const activities: Activity[] = [
  {
    id: 1,
    user: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AM",
    },
    action: "completed",
    target: "Update user dashboard design",
    timestamp: "Just now",
    date: "today",
    Icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    type: "task",
  },
  {
    id: 2,
    user: {
      name: "Jamie Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JC",
    },
    action: "commented on",
    target: "API integration with payment gateway",
    timestamp: "10 minutes ago",
    date: "today",
    Icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
    type: "comment",
  },
  {
    id: 3,
    user: {
      name: "Taylor Swift",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TS",
    },
    action: "created",
    target: "New feature request: Dark mode",
    timestamp: "1 hour ago",
    date: "today",
    Icon: <Plus className="h-4 w-4 text-purple-500" />,
    type: "task",
  },
  {
    id: 4,
    user: {
      name: "System",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SY",
    },
    action: "scheduled",
    target: "Weekly team meeting",
    timestamp: "2 hours ago",
    date: "today",
    Icon: <Calendar className="h-4 w-4 text-indigo-500" />,
    type: "event",
  },
];
type GroupedActivities = {
  [key: string]: Activity[];
};
const RecentActivities = () => {
  const groupedActivities: GroupedActivities = {
    today: activities.filter((activity) => activity.date === "today"),
    yesterday: activities.filter((activity) => activity.date === "yesterday"),
    earlier: activities.filter((activity) => activity.date === "earlier"),
  };
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-7 top-0 w-px bg-border" />
      <div className="space-y-6">
        {Object.keys(groupedActivities).map(
          (dateGroup) =>
            groupedActivities[dateGroup].length > 0 && (
              <div key={dateGroup} className="relative">
                <div className="sticky top-0 z-20 mb-4 bg-muted dark:bg-muted/70 px-2 pb-2 pt-2">
                  <h3 className="text-sm font-medium capitalize">{dateGroup === "today" ? "Today" : dateGroup === "yesterday" ? "Yesterday" : "Earlier this week"}</h3>
                </div>
                <div className="space-y-4">
                  {groupedActivities[dateGroup].map((activity) => (
                    <div key={activity.id} className="relative flex gap-4">
                      <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center">
                        <Avatar className="w-7 h-7 md:h-10 md:w-10">
                          <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                          <AvatarFallback className="text-xs text-text  md:text-lg bg-slate-200 dark:bg-slate-950">{activity.user.initials}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 rounded  bg-card p-4 pl-14 shadow-lg border-t">
                        <div className="flex flex-col md:flex-row  gap-0.5 md:gap-1.5 ">
                          <div className="text-nowrap text-text lg:font-medium">{activity.user.name}</div>
                          <div className="text-xs mt-0.5 text-nowrap md:text-sm text-muted-foreground">{activity.action}</div>
                          <div className="text-xs md:text-sm line-clamp-2 text-text">{activity.target}</div>
                        </div>
                        <div className="mt-1.5 flex md:items-center flex-col md:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            {activity.Icon}
                            <span>{activity.type}</span>
                          </div>
                          <div className="hidden md:block">•</div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{activity.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default RecentActivities;
