export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4 py-6">
                <nav className="flex justify-between items-center mb-16">
                    <div className="text-2xl font-bold text-white">NetworkMonitor</div>
                    <div className="space-x-6">
                        <a href="#features" className="text-gray-300 hover:text-white">
                            Features
                        </a>
                        <a href="#documentation" className="text-gray-300 hover:text-white">
                            Docs
                        </a>
                        <a
                            href="https://github.com/lustarm/gowatch"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            GitHub
                        </a>
                    </div>
                </nav>

                <main className="text-center mt-32">
                    <h1 className="text-6xl font-bold text-white mb-6">
                        Network Monitoring{" "}
                        <span className="text-blue-500">Made Simple</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Monitor your network traffic, detect anomalies, and manage IP
                        blacklists/whitelists with our powerful and intuitive tool.
                    </p>

                    <div className="flex justify-center space-x-6">
                        <button className="px-8 py-3 bg-blue-600 text-white
                            rounded-lg hover:bg-blue-700 transform
                            hover:scale-105 transition-all">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border border-gray-600
                            text-gray-300 rounded-lg hover:border-gray-400
                            hover:text-white transform hover:scale-105 transition-all">
                            View Demo
                        </button>
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-800 rounded-xl">
                            <div className="text-blue-500 text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Real-time Monitoring
                            </h3>
                            <p className="text-gray-400">
                                Track packet rates, byte rates, and error rates in real-time
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-xl">
                            <div className="text-blue-500 text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                IP Management
                            </h3>
                            <p className="text-gray-400">
                                Easily manage IP blacklists and whitelists
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-xl">
                            <div className="text-blue-500 text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Smart Alerts
                            </h3>
                            <p className="text-gray-400">
                                Get notified when network metrics exceed your thresholds
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

