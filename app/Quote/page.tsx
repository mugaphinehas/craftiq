"use client"
import React, { useState } from 'react'
import Navbar from "../sections/Navbar"

export default function QuotePage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        budget: 'unassigned',
        scope: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Using Web3Forms Free API layer (requires no backend code)
            // Alternative: Formspree endpoint or your own API route
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    // Public access key requested freely from web3forms.com
                    // For now, it sends to the platform container which forwards to info@craftiq.space
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", 
                    subject: `[CraftiQ Architecture Request] - From ${formData.name}`,
                    to_email: "info@craftiq.space",
                    ...formData
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', budget: 'unassigned', scope: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission pipeline blocked:", error);
            setStatus('error');
        }
    };

    return (
        <main className="bg-[#fbfbfb] min-h-screen text-black font-sans border-t border-black">
            <Navbar />
            <div className="px-8 md:px-16 pt-32 pb-24">
            
            {/* Header Structural Alignment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
                <div className="md:col-span-3 font-mono text-xs uppercase font-semibold tracking-wider text-black pt-1">
                    // system initialization
                </div>
                <div className="md:col-span-9">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                        request <br />
                        <span className="font-light italic lowercase tracking-tight block mt-2">valuation matrix.</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base font-mono max-w-xl leading-relaxed mt-8">
                        [ pipeline route: info@craftiq.space ] Provide primary dimensional parameters. Architecture loops respond within 24 operational hours.
                    </p>
                </div>
            </div>

            {/* Main Interactive Form Interface Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                
                {/* Left Frame: Data Protocols */}
                <div className="md:col-span-4 hidden md:flex flex-col justify-between min-h-[400px] border-r border-gray-200/60 pr-8 font-mono text-xs text-gray-400">
                    <div className="space-y-6">
                        <div>
                            <span className="text-black block font-semibold">// 01 // validation</span>
                            <p className="lowercase mt-1">all input vectors must match string variables securely.</p>
                        </div>
                        <div>
                            <span className="text-black block font-semibold">// 02 // routing</span>
                            <p className="lowercase mt-1">direct transport pipeline mapped instantly to main operational desk.</p>
                        </div>
                    </div>

                    <div className="text-[10px] uppercase tracking-widest text-zinc-300">
                        system status: ready
                    </div>
                </div>

                {/* Right Frame: Form Elements Sheet */}
                <form onSubmit={handleSubmit} className="md:col-span-8 space-y-12">
                    
                    {/* Input Row 01: Identity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div className="relative border-b border-black/40 focus-within:border-black transition-colors pb-2">
                            <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                [ 01 ] Client Name *
                            </label>
                            <input 
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g., phinehas muriithi"
                                className="w-full bg-transparent border-none outline-none text-base font-medium placeholder:text-gray-300 py-1 lowercase tracking-tight"
                            />
                        </div>

                        <div className="relative border-b border-black/40 focus-within:border-black transition-colors pb-2">
                            <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                [ 02 ] Corporate Entity
                            </label>
                            <input 
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="e.g., craftiq labs"
                                className="w-full bg-transparent border-none outline-none text-base font-medium placeholder:text-gray-300 py-1 lowercase tracking-tight"
                            />
                        </div>
                    </div>

                    {/* Input Row 02: Secure Address & Valuation Scale */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div className="relative border-b border-black/40 focus-within:border-black transition-colors pb-2">
                            <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                [ 03 ] Secure Signal (Email) *
                            </label>
                            <input 
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="ops@domain.space"
                                className="w-full bg-transparent border-none outline-none text-base font-medium placeholder:text-gray-300 py-1 tracking-tight"
                            />
                        </div>

                        <div className="relative border-b border-black/40 focus-within:border-black transition-colors pb-2">
                            <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                                [ 04 ] Allocated Capital Vector
                            </label>
                            <select 
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-none outline-none text-base font-medium text-gray-600 focus:text-black py-1 tracking-tight appearance-none cursor-pointer lowercase"
                            >
                                <option value="unassigned">select range parameters</option>
                                <option value="scale-alpha">tier 01 // localized baseline</option>
                                <option value="scale-beta">tier 02 // scalable system growth</option>
                                <option value="scale-gamma">tier 03 // enterprise framework</option>
                            </select>
                        </div>
                    </div>

                    {/* Input Row 03: Architecture Scope Block */}
                    <div className="relative border-b border-black/40 focus-within:border-black transition-colors pb-2">
                        <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                            [ 05 ] Core Functional Architectural Requirements *
                        </label>
                        <textarea 
                            name="scope"
                            required
                            rows={4}
                            value={formData.scope}
                            onChange={handleInputChange}
                            placeholder="break down the project parameter scope, timeline limits, design variables, or development engine specs..."
                            className="w-full bg-transparent border-none outline-none text-base font-medium placeholder:text-gray-300 py-2 resize-none tracking-tight leading-relaxed"
                        />
                    </div>

                    {/* Form Processing State Engine Messages */}
                    {status === 'success' && (
                        <div className="font-mono text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 p-4 rounded-none lowercase">
                            [ transmission verified ] data matrix safely deployed to info@craftiq.space. core engineers notified.
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="font-mono text-xs text-rose-600 bg-rose-50 border border-rose-200 p-4 rounded-none lowercase">
                            [ loop failure ] pipeline network trace dropped. please verify network logic or transmit manually to info@craftiq.space.
                        </div>
                    )}

                    {/* Structural Submit Block */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full md:w-auto px-12 py-4 font-mono text-xs uppercase tracking-widest bg-black text-white border border-black hover:bg-transparent hover:text-black transition-colors duration-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed rounded-none"
                        >
                            {status === 'submitting' ? 'transmitting matrix...' : 'initialize deployment query'}
                        </button>
                    </div>

                </form>

            </div>

            </div>
        </main>
    );
}