export default function TipCard({ tip }) {
    return (
        <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body p-4">
                <p className="text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{tip}</span>
                </p>
            </div>
        </div>
    );
}