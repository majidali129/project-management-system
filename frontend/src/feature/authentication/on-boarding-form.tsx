import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types";
import { ArrowRight, Search, Terminal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function OnboardingForm() {
  const [selectedOption, setSelectedOption] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  const handleUserRoleSelection = () => {
    if (!selectedOption) return;

    localStorage.setItem("role", selectedOption);
    navigate("/users/sign-up");
    setSelectedOption(null);
  };

  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col p-8 md:p-16 lg:p-20 bg-background">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl md:leading-13 tracking-wider font-bold text-[var(--text-dark)] dark:text-[var(--text-light)]">How do you want to use ProjectHub?</h1>
            <p className="sm:text-lg text-[var(--text-dark)] dark:text-[var(--text-light)] ">We'll personalize your setup experience accordingly.</p>
          </div>

          <div className="space-y-4">
            <div
              className={` p-4 md:p-6 rounded border cursor-pointer shadow-lg bg-slate-200 dark:bg-slate-900 transition-all ${
                selectedOption === UserRole.PROJECT_MANAGER ? "border-amber-500 bg-slate-100  dark:bg-slate-900/40" : "dark:border-slate-700 dark:hover:border-slate-600"
              }`}
              onClick={() => setSelectedOption(UserRole.PROJECT_MANAGER)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-slate-400 dark:border-0 dark:bg-slate-950 rounded-full">
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="md:text-xl font-semibold text-slate-800 dark:text-slate-200">I'm a Project Manager/Admin</h3>
                  <p className="text-slate-600 dark:text-slate-400  mt-1">Create and manage projects, assign tasks, track progress</p>
                </div>
                <div className="ml-auto">{selectedOption === UserRole.PROJECT_MANAGER && <Badge>Selected</Badge>}</div>
              </div>
            </div>

            <div
              className={`p-6 rounded border shadow-lg cursor-pointer bg-slate-200 dark:bg-slate-900 transition-all ${
                selectedOption === UserRole.DEVELOPER ? "border-amber-500 bg-slate-100  dark:bg-slate-900/40" : "dark:border-slate-700 dark:hover:border-slate-600"
              }`}
              onClick={() => setSelectedOption(UserRole.DEVELOPER)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-slate-400 dark:border-0 dark:bg-slate-950 rounded-full">
                  <Terminal className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="md:text-xl font-semibold text-slate-800 dark:text-slate-200">I'm a Developer/Team Member</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">View assigned tasks, update progress, collaborate with team</p>
                </div>
                <div className="ml-auto">{selectedOption === UserRole.DEVELOPER && <Badge>Selected</Badge>}</div>
              </div>
            </div>
          </div>

          {selectedOption && (
            <div className="flex justify-end  md:justify-start">
              <Button onClick={handleUserRoleSelection} type="button" className="flex items-center justify-center gap-2">
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Right side illustration or image */}
      <div className="hidden min-h-screen lg:block md:w-1/3 lg:w-2/5 bg-gradient-to-br from-slate-800 to-slate-900">{/* You can add an illustration or image here */}</div>
    </div>
  );
}
