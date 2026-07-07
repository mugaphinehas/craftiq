"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Link from 'next/link'

interface SearchResult {
  title: string;
  category: string;
  href: string;
  id: string;
}

export default function Navbar() {
  const menuItems = [
    { name: 'usecases', href: '/Usecase', index: '01' },
    { name: 'services', href: '/Services', index: '02' },
    { name: 'company', href: '/Company', index: '03' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Hardcoded index mapping for local client-side evaluation 
  const mockDatabase: SearchResult[] = [
    { id: "01", title: "Corporate Identity Layouts", category: "services", href: "/Services" },
    { id: "02", title: "Business Card Print Arrays", category: "services", href: "/Services" },
    { id: "03", title: "UV / DTF Mechanical Optimization", category: "services", href: "/Services" },
    { id: "04", title: "Next.js Web Engine Infrastructure", category: "services", href: "/Services" },
    { id: "05", title: "Agribusiness Scalability Projects", category: "usecases", href: "/Usecase" },
    { id: "06", title: "Wellness Interface Case Studies", category: "usecases", href: "/Usecase" }
  ]

  // Filter items matching input character queries
  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : mockDatabase.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )

  // Pull focus down onto input row upon system engagement
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  return (
    <header className="w-full bg-[#fbfbfb] border-b border-black text-black sticky top-0 z-50 font-sans select-none">
      <div className="px-8 md:px-16 mx-auto">
        <div className="flex h-20 items-center justify-between relative">
          
          {/* LOGO FRAME */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-70">
              <Image
                src="/craftiqlogo.svg"
                width={90}
                height={42}
                loading="eager"
                alt="craftiq logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV & INLINE SEARCH CONTROLS */}
          <div className="hidden lg:flex items-center gap-12 h-full flex-grow justify-end pr-8">
            {!isSearchOpen ? (
              <nav className="flex items-center h-full transition-all duration-300">
                <ul className="flex items-center gap-12 text-sm font-medium tracking-tight h-full">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <Link
                        href={item.href}
                        className="flex items-baseline gap-1 text-black/80 hover:text-black transition-colors duration-200 lowercase"
                      >
                        <span className="font-mono text-[9px] text-gray-400">[{item.index}]</span>
                        <span>{item.name}</span>
                      </Link>
                      <span className="absolute bottom-[-29px] left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out" />
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              /* Inline Dynamic Search Bar Layer */
              <div className="w-full max-w-xl flex items-center gap-4 border-b border-black/30 py-1 transition-all duration-300 animate-fadeIn">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-tight">[query]</span>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="type to seek data fields..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-sm lowercase text-black font-mono placeholder-gray-300"
                />
              </div>
            )}

            {/* Core Search Toggle Button Icon */}
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if(isSearchOpen) setSearchQuery('');
              }}
              className="flex items-center gap-2 hover:opacity-60 transition-opacity font-mono text-xs uppercase"
              aria-label="Toggle Search Framework"
            >
              {isSearchOpen ? (
                <span className="text-gray-400">[close x]</span>
              ) : (
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-[11px] font-bold tracking-tight">// search</span>
                </div>
              )}
            </button>
          </div>

          {/* ACTION HUB PANEL BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/Quote"
              className="font-mono text-xs uppercase tracking-widest border border-black bg-black text-white hover:bg-transparent hover:text-black px-6 py-2.5 rounded-none transition-colors duration-300"
            >
              free strategy call
            </Link>
          </div>

          {/* MOBILE NAV TOGGLE SYSTEM */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchQuery('');
              }}
              className="p-2 text-black hover:text-zinc-500 focus:outline-none"
              aria-label="Toggle Mobile Search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setIsOpen(!isOpen);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 text-black hover:text-zinc-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 14h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* DROPDOWN LIVE LIVE SEARCH MATRIX EXPANSION */}
      {isSearchOpen && (
        <div className="w-full bg-[#fbfbfb] border-t border-black animate-slideDown max-h-[70vh] overflow-y-auto">
          {/* Mobile search bar instance */}
          <div className="lg:hidden px-8 pt-4 pb-2">
            <div className="flex items-center gap-3 border-b border-black pb-2">
              <span className="font-mono text-[10px] text-gray-400">[query]</span>
              <input
                type="text"
                placeholder="search capabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-base lowercase text-black font-mono"
              />
            </div>
          </div>

          <div className="px-8 md:px-16 py-8">
            <div className="font-mono text-[10px] uppercase text-gray-400 mb-4 tracking-wider">// evaluation output index</div>
            
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredResults.map((result) => (
                  <Link 
                    key={result.id} 
                    href={result.href}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="group flex items-center justify-between border border-black/10 hover:border-black p-4 bg-white transition-all duration-150"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase text-gray-400 block">[{result.category}]</span>
                      <span className="text-sm font-semibold text-black lowercase tracking-tight group-hover:underline">{result.title}</span>
                    </div>
                    <span className="font-mono text-xs text-gray-300 group-hover:text-black transition-colors">// tracking_{result.id}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-sm font-mono text-gray-400 lowercase py-4">
                {searchQuery.trim() === '' ? "awaiting string vectors..." : "null error_ zero files matching criteria found."}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE DRILLDOWN MATRIX */}
      {isOpen && !isSearchOpen && (
        <div className="lg:hidden bg-[#fbfbfb] border-t border-black" id="mobile-menu">
          <div className="px-8 pt-4 pb-12 space-y-6">
            <ul className="flex flex-col gap-5 font-sans text-xl font-medium tracking-tighter uppercase">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100 pb-3 flex items-baseline justify-between group">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-black hover:text-zinc-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <span className="font-mono text-xs text-gray-400">// {item.index}</span>
                </li>
              ))}
              <li className="border-b border-gray-100 pb-3 flex items-baseline justify-between group">
                <Link href="/Quote" onClick={() => setIsOpen(false)} className="block text-black hover:text-zinc-500 transition-colors">
                  get quote
                </Link>
                <span className="font-mono text-xs text-gray-400">// 04</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <Link
                href="/Quote"
                onClick={() => setIsOpen(false)}
                className="block text-center font-mono text-xs uppercase tracking-widest border border-black bg-black text-white py-4 rounded-none transition-colors"
              >
                free strategy call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}