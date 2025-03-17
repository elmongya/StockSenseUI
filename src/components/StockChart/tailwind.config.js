{/* Chart Container */}
<div className="w-full max-w-3xl mx-auto">
    <canvas ref={canvasRef}></canvas>
</div>

{/* Buttons Container */}
<div className="flex justify-center gap-3 mt-4">
    {Object.keys(rangeOptions).map(range => (
        <button
            key={range}
            className={`px-3 py-1 text-sm font-semibold rounded-md transition ${
                dateRange === range ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setDateRange(range)}
        >
            {range}
        </button>
    ))}
</div>
