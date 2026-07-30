import Reveal from "@/components/ui/Reveal";

export default function ThreeMovingParts() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-4">
            One Subscription, Three Moving Parts
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Your subscription and dashboard on one side, inaraX in the
            middle, and the people who run the program and take the course on
            the other.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delayMs={100} className="glass-card p-8 rounded-2xl flex flex-col h-full">
            <h3 className="font-headline-sm text-headline-sm mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                dashboard
              </span>
              Org dashboard
            </h3>
            <div className="space-y-4 mt-auto">
              <div className="flex justify-between items-center p-4 bg-surface rounded-xl border border-outline-variant/10">
                <span className="text-on-surface-variant">
                  Seats Allocated
                </span>
                <span className="font-bold text-primary">2,500</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-surface rounded-xl border border-outline-variant/10">
                <span className="text-on-surface-variant">In course</span>
                <span className="font-bold text-primary">84%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-surface rounded-xl border border-outline-variant/10">
                <span className="text-on-surface-variant">
                  Lessons completed
                </span>
                <span className="font-bold text-primary">12,402</span>
              </div>
            </div>
          </Reveal>
          <Reveal
            delayMs={200}
            className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center bg-primary text-on-primary"
          >
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <span className="font-bold text-xl">InaraX</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-center mb-4">
              Central Intelligence
            </h3>
            <p className="text-center text-white/80 font-body-sm">
              The node that connects your organizational goals to
              personalized individual learning paths.
            </p>
          </Reveal>
          <Reveal delayMs={300} className="glass-card p-8 rounded-2xl flex flex-col h-full">
            <h3 className="font-headline-sm text-headline-sm mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                groups
              </span>
              Roles
            </h3>
            <div className="space-y-4 mt-auto">
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold">Program owner</span>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="font-semibold">L&amp;D / Partner</span>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <span className="font-semibold">Learner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
