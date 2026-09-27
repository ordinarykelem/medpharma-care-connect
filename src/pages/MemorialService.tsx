import React, { useState, useMemo } from "react";
import {
  MEMORIAL_INFO,
  PROGRAM_SCHEDULE,
  HYMNS,
  Hymn,
} from "@/lib/memorialServiceData";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Share2,
  Copy,
  Check,
  Music,
  BookOpen,
  User,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Heart,
  QrCode,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

export default function MemorialService() {
  const [activeTab, setActiveTab] = useState<string>("program");
  const [selectedHymnId, setSelectedHymnId] = useState<string | null>(null);
  const [hymnSearch, setHymnSearch] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");

  // Current URL for sharing
  const pageUrl = typeof window !== "undefined" ? window.location.href : "https://medpharma.care/memorial";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(
    pageUrl
  )}&bgcolor=ffffff&color=0f172a&margin=10`;

  const copyShareLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopiedLink(true);
    toast({
      title: "Link Copied",
      description: "Memorial page link copied to clipboard.",
    });
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const copyMeetLink = () => {
    navigator.clipboard.writeText(MEMORIAL_INFO.liveStream.url);
    toast({
      title: "Google Meet Link Copied",
      description: MEMORIAL_INFO.liveStream.url,
    });
  };

  const shareOnWhatsApp = () => {
    const text = `Memorial Service in Honor of ${MEMORIAL_INFO.fullName} (${MEMORIAL_INFO.role})\n\nDate: ${MEMORIAL_INFO.date}\nTime: ${MEMORIAL_INFO.time}\nVenue: ${MEMORIAL_INFO.venue.room}, ${MEMORIAL_INFO.venue.floor}, ${MEMORIAL_INFO.venue.building}\n\nAccess Program, Hymn Lyrics & Live Stream here:\n${pageUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const filteredHymns = useMemo(() => {
    if (!hymnSearch.trim()) return HYMNS;
    const q = hymnSearch.toLowerCase();
    return HYMNS.filter(
      (h) =>
        h.title.toLowerCase().includes(q) ||
        h.author.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q) ||
        h.stanzas.some((s) => s.lines.some((l) => l.toLowerCase().includes(q)))
    );
  }, [hymnSearch]);

  const handleJumpToHymn = (hymnRefId?: string) => {
    if (!hymnRefId) return;
    setActiveTab("hymns");
    setSelectedHymnId(hymnRefId);
    setTimeout(() => {
      const el = document.getElementById(hymnRefId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const fontSizeClass = {
    normal: "text-sm sm:text-base leading-relaxed",
    large: "text-base sm:text-lg leading-loose",
    xlarge: "text-lg sm:text-xl leading-loose font-medium",
  }[fontSize];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center selection:bg-amber-500/30 selection:text-amber-200 w-full overflow-x-hidden">
      {/* Top Banner / Navigation */}
      <header className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-semibold truncate">
              MedPharma Memorial
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Button
              size="sm"
              variant="outline"
              onClick={copyShareLink}
              className="border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 h-7 sm:h-8 px-2.5 sm:px-3 text-xs gap-1"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? "Copied" : "Share"}</span>
            </Button>

            <a
              href={MEMORIAL_INFO.liveStream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 h-7 sm:h-8 px-2.5 sm:px-3 rounded-md text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors shrink-0"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Join Live</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-3xl px-3 sm:px-4 py-4 sm:py-8 flex flex-col gap-4 sm:gap-6 min-w-0">
        {/* Memorial Hero Card */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-4 sm:p-8 text-center shadow-2xl w-full">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-36 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4">
            <Heart className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>In Loving Memory</span>
          </div>

          {/* Photo Frame */}
          <div className="relative mx-auto w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-b from-amber-400/40 via-slate-700 to-slate-800 shadow-xl mb-3 sm:mb-4">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950 flex items-center justify-center">
              <img
                src={MEMORIAL_INFO.flyerImage}
                alt={MEMORIAL_INFO.fullName}
                className="w-full h-full object-cover object-top scale-125 translate-y-2 sm:translate-y-3"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-amber-500 text-slate-950 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full shadow border border-amber-300">
              Aged {MEMORIAL_INFO.age}
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-xl sm:text-3xl font-serif font-bold text-slate-100 tracking-tight mb-1 break-words">
            {MEMORIAL_INFO.fullName}
          </h1>
          <p className="text-xs sm:text-base font-medium text-amber-400/90 mb-1 break-words">
            {MEMORIAL_INFO.role}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">
            {MEMORIAL_INFO.company}
          </p>

          <p className="italic text-xs sm:text-sm text-slate-300 max-w-xl mx-auto border-t border-slate-800/80 pt-3 font-serif break-words">
            "{MEMORIAL_INFO.memoryQuote}"
          </p>

          {/* Metadata Grid */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left border-t border-slate-800/80 pt-4 sm:pt-5 w-full">
            <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/90 min-w-0">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Date</div>
                <div className="text-xs font-semibold text-slate-200 truncate">{MEMORIAL_INFO.date}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/90 min-w-0">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Time</div>
                <div className="text-xs font-semibold text-slate-200">{MEMORIAL_INFO.time}</div>
                <div className="text-[10px] text-emerald-400">Seating: {MEMORIAL_INFO.doorsOpen}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800/90 min-w-0">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Venue</div>
                <div className="text-xs font-semibold text-slate-200 truncate">{MEMORIAL_INFO.venue.room}</div>
                <div className="text-[10px] text-slate-400 truncate">{MEMORIAL_INFO.venue.floor}, {MEMORIAL_INFO.venue.building}</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 w-full">
            <a
              href={MEMORIAL_INFO.liveStream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform active:scale-95 w-full sm:w-auto"
            >
              <Video className="w-4 h-4 shrink-0" />
              <span>Join Google Meet Stream</span>
              <ExternalLink className="w-3 h-3 opacity-70 shrink-0" />
            </a>

            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnWhatsApp}
                className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 text-xs rounded-xl h-9 w-full"
              >
                <Share2 className="w-3.5 h-3.5 mr-1 shrink-0" /> WhatsApp
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("qrcode")}
                className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 text-xs rounded-xl h-9 w-full"
              >
                <QrCode className="w-3.5 h-3.5 mr-1 shrink-0" /> QR Code
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-0">
          <TabsList className="w-full grid grid-cols-4 bg-slate-900/90 border border-slate-800 p-1 rounded-xl h-auto gap-0.5">
            <TabsTrigger
              value="program"
              className="text-[11px] sm:text-xs py-2 px-1 sm:px-2 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-1 min-w-0"
            >
              <Clock className="w-3.5 h-3.5 shrink-0 hidden xs:inline" />
              <span className="truncate">Program</span>
            </TabsTrigger>

            <TabsTrigger
              value="hymns"
              className="text-[11px] sm:text-xs py-2 px-1 sm:px-2 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-1 min-w-0"
            >
              <Music className="w-3.5 h-3.5 shrink-0 hidden xs:inline" />
              <span className="truncate">Hymns ({HYMNS.length})</span>
            </TabsTrigger>

            <TabsTrigger
              value="tribute"
              className="text-[11px] sm:text-xs py-2 px-1 sm:px-2 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-1 min-w-0"
            >
              <User className="w-3.5 h-3.5 shrink-0 hidden xs:inline" />
              <span className="truncate">Tribute</span>
            </TabsTrigger>

            <TabsTrigger
              value="qrcode"
              className="text-[11px] sm:text-xs py-2 px-1 sm:px-2 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-1 min-w-0"
            >
              <QrCode className="w-3.5 h-3.5 shrink-0 hidden xs:inline" />
              <span className="truncate">QR & Live</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: ORDER OF SERVICE */}
          <TabsContent value="program" className="mt-4 flex flex-col gap-3 w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
              <div>
                <h2 className="text-base font-serif font-bold text-slate-100">Order of Memorial Service</h2>
                <p className="text-xs text-slate-400">Officiated by {MEMORIAL_INFO.officiating.name}</p>
              </div>
              <span className="text-[11px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 self-start sm:self-auto">
                10:00 AM – 11:55 AM
              </span>
            </div>

            <div className="flex flex-col gap-2.5 mt-1 w-full min-w-0">
              {PROGRAM_SCHEDULE.map((item) => {
                const isHymn = item.type === "hymn";
                const isSermon = item.type === "sermon";

                return (
                  <div
                    key={item.id}
                    className={`rounded-xl p-3 sm:p-4 border transition-colors w-full min-w-0 ${
                      isHymn
                        ? "bg-slate-900/90 border-amber-500/30 hover:border-amber-500/60"
                        : isSermon
                        ? "bg-slate-900/90 border-emerald-500/30"
                        : "bg-slate-900/50 border-slate-800/80 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-mono font-bold text-amber-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                          {item.time}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono shrink-0">({item.duration})</span>
                      </div>

                      {isHymn && item.hymnRefId && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleJumpToHymn(item.hymnRefId)}
                          className="h-7 px-2 text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-500/20 rounded-lg gap-1 shrink-0"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Lyrics</span>
                        </Button>
                      )}
                    </div>

                    <div className="mt-2 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-100 flex items-start gap-1.5 break-words">
                        {isHymn && <Music className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
                        <span className="break-words">{item.title}</span>
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-xs break-words">
                        <span className="text-slate-300 font-medium">{item.lead}</span>
                        {item.roleOrAffiliation && (
                          <span className="text-slate-400">• {item.roleOrAffiliation}</span>
                        )}
                      </div>

                      {item.notes && (
                        <p className="text-xs text-slate-400 mt-1.5 italic font-serif break-words">
                          {item.notes}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Officiating Minister Card */}
            <div className="mt-3 p-4 rounded-xl bg-slate-900 border border-slate-800 w-full min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Officiating Minister
              </div>
              <div className="text-sm font-bold text-slate-100 break-words">{MEMORIAL_INFO.officiating.name}</div>
              <div className="text-xs text-slate-400 mt-1 space-y-0.5 break-words">
                {MEMORIAL_INFO.officiating.titles.map((t, i) => (
                  <div key={i}>{t}</div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: HYMN BOOK (LYRICS) */}
          <TabsContent value="hymns" className="mt-4 flex flex-col gap-3 sm:gap-4 w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <h2 className="text-base font-serif font-bold text-slate-100">Official Hymn Book</h2>
                <p className="text-xs text-slate-400">All 7 hymns with full stanzas and refrains</p>
              </div>

              {/* Font Size Adjuster for Easy Reading While Singing */}
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-lg self-start sm:self-auto shrink-0">
                <span className="text-[10px] uppercase text-slate-400 px-1 font-mono">Font Size:</span>
                <button
                  type="button"
                  onClick={() => setFontSize("normal")}
                  className={`px-2 py-0.5 text-xs rounded transition-colors ${
                    fontSize === "normal" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize("large")}
                  className={`px-2 py-0.5 text-xs rounded transition-colors ${
                    fontSize === "large" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Large
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize("xlarge")}
                  className={`px-2 py-0.5 text-xs rounded transition-colors ${
                    fontSize === "xlarge" ? "bg-amber-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  XL
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search hymn title, lyric, or author..."
                value={hymnSearch}
                onChange={(e) => setHymnSearch(e.target.value)}
                className="pl-9 pr-14 bg-slate-900 border-slate-800 text-xs sm:text-sm text-slate-100 rounded-xl w-full"
              />
              {hymnSearch && (
                <button
                  type="button"
                  onClick={() => setHymnSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Hymn List */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full min-w-0">
              {filteredHymns.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No hymns matched your search "{hymnSearch}"
                </div>
              ) : (
                filteredHymns.map((hymn) => {
                  const isExpanded = selectedHymnId === hymn.id || filteredHymns.length === 1;

                  return (
                    <article
                      key={hymn.id}
                      id={hymn.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-sm transition-all w-full min-w-0"
                    >
                      {/* Hymn Header Bar */}
                      <div
                        onClick={() => setSelectedHymnId(isExpanded ? null : hymn.id)}
                        className="p-3.5 sm:p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors gap-2"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                            {hymn.orderNumber}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-serif font-bold text-slate-100 truncate">
                              {hymn.title}
                            </h3>
                            <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                              <span>{hymn.author}</span>
                              {hymn.hymnTune && <span> • Tune: {hymn.hymnTune}</span>}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 hidden xs:inline">
                            {hymn.category}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </div>
                      </div>

                      {/* Stanzas & Lyrics */}
                      {isExpanded && (
                        <div className="px-3.5 sm:px-4 pb-5 pt-2 border-t border-slate-800/80 bg-slate-950/40 space-y-3 sm:space-y-4 w-full">
                          {hymn.stanzas.map((stanza, sIdx) => {
                            if (stanza.isRefrain) {
                              return (
                                <div
                                  key={sIdx}
                                  className="my-2.5 pl-3 sm:pl-4 py-2 border-l-2 border-amber-400/80 bg-amber-500/5 rounded-r-lg"
                                >
                                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-semibold mb-1">
                                    Refrain / Chorus:
                                  </div>
                                  <div className={`${fontSizeClass} font-serif text-amber-100/95 italic space-y-0.5 break-words`}>
                                    {stanza.lines.map((line, lIdx) => (
                                      <p key={lIdx} className="break-words">{line}</p>
                                    ))}
                                  </div>
                                </div>
                              );
                            }

                            return (
                              <div key={sIdx} className="flex items-start gap-2.5 sm:gap-3 pt-1">
                                <span className="text-xs font-mono text-slate-500 font-bold w-4 shrink-0 pt-0.5">
                                  {stanza.number}.
                                </span>
                                <div className={`${fontSizeClass} font-serif text-slate-200 space-y-0.5 min-w-0 flex-1 break-words`}>
                                  {stanza.lines.map((line, lIdx) => (
                                    <p key={lIdx} className="break-words">{line}</p>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </article>
                  );
                })
              )}
            </div>
          </TabsContent>

          {/* TAB 3: IN MEMORIAM / TRIBUTE */}
          <TabsContent value="tribute" className="mt-4 flex flex-col gap-3 sm:gap-4 w-full min-w-0">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 sm:space-y-4 w-full min-w-0">
              <h2 className="text-base sm:text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>Remembering Prince Patrick Ekow Bondzie</span>
              </h2>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-serif break-words">
                <p>
                  Prince Patrick Ekow Bondzie (aged 32) served as the <strong>Chief Technology Officer</strong> and <strong>Lead Software Engineer</strong> at MedPharma. He was the intellectual heartbeat and architect behind the digital healthcare systems that connect thousands of Ghanaians to medications, telemedicine, and life-saving health services.
                </p>
                <p>
                  Known for his calm demeanor, sharp engineering intellect, and unwavering generosity of spirit, Prince led with humility. Whether debugging complex deployment scripts late into the night or mentoring young software developers, he brought excellence, patience, and contagious warmth to every endeavor.
                </p>
                <p>
                  Outside of technology, Prince was a devoted Christian whose life reflected faith, family dedication, and steadfast integrity.
                </p>
                <p className="italic text-amber-300 pt-2 border-t border-slate-800">
                  "May his memory remain an everlasting blessing, and may his works in technology and human lives endure for generations."
                </p>
              </div>

              {/* Company Info */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <div>MedPharma</div>
                <div>RSVP: {MEMORIAL_INFO.contactRsvp}</div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: LIVE STREAM & QR CODE */}
          <TabsContent value="qrcode" className="mt-4 flex flex-col gap-3 sm:gap-4 w-full min-w-0">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 sm:space-y-4 w-full min-w-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <Video className="w-3.5 h-3.5 shrink-0" />
                <span>Virtual Attendance</span>
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-100">
                Live Stream on Google Meet
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                For international colleagues, investors, and family joining from abroad, the memorial service is being streamed live.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 max-w-md mx-auto w-full">
                <Input
                  readOnly
                  value={MEMORIAL_INFO.liveStream.url}
                  className="bg-slate-950 border-slate-800 text-xs font-mono text-center text-slate-300 h-9 w-full min-w-0 truncate"
                />
                <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0">
                  <Button
                    size="sm"
                    onClick={copyMeetLink}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs h-9 gap-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </Button>
                  <a
                    href={MEMORIAL_INFO.liveStream.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 h-9 px-3 rounded-md text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                  >
                    <span>Open Room</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="pt-5 border-t border-slate-800 flex flex-col items-center w-full">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Scan to Open Digital Program & Hymns on Mobile
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-xl border-4 border-slate-800 mb-3 max-w-full">
                  <img
                    src={qrCodeUrl}
                    alt="Scan for Memorial Service Program"
                    className="w-44 h-44 sm:w-56 sm:h-56 max-w-full h-auto block rounded-lg mx-auto"
                  />
                </div>

                <p className="text-xs text-slate-400 max-w-sm mb-4">
                  Point any smartphone camera at this QR code to access this page, follow the program, and view all hymn lyrics.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyShareLink}
                    className="border-slate-700 bg-slate-800 text-slate-200 text-xs rounded-xl h-8"
                  >
                    <Copy className="w-3.5 h-3.5 mr-1" /> Copy Page URL
                  </Button>

                  <a
                    href={qrCodeUrl}
                    download="prince-memorial-qr-code.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs"
                  >
                    <Download className="w-3.5 h-3.5" /> Download QR Image
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950 py-5 sm:py-6 px-4 text-center text-xs text-slate-500">
        <p className="mb-1">MedPharma • Seamless Healthcare</p>
        <p className="text-[11px] text-slate-600">
          In everlasting tribute to Prince Patrick Ekow Bondzie (1994 – 2026)
        </p>
      </footer>
    </div>
  );
}
