import TipCard from "./TipCard";

export default function TipsDrawer({ tips, loading }) {
    return (
        <div className="drawer">
            <input id="tips-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content" />

            <div className="drawer-side">
                <label htmlFor="tips-drawer" className="drawer-overlay"></label>

                <div className="bg-base-200 min-h-full w-80 p-4 flex flex-col gap-4 overflow-y-auto">
                    <h2 className="text-lg font-bold text-center">AI Weather Tips</h2>

                    {loading && (
                        <div className="flex items-center gap-2">
                            <span className="loading loading-spinner"></span>
                            <p>Generating tips...</p>
                        </div>
                    )}

                    {!loading && tips.length === 0 && (
                        <p className="opacity-70">
                            No tips yet. Press the button and hope for wisdom.
                        </p>
                    )}

                    {!loading &&
                        tips.map((tip, index) => (
                            <TipCard key={`${tip}-${index}`} tip={tip} />
                        ))}
                </div>
            </div>
        </div>
    );
}