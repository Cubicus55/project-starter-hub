import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const rejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 hidden sm:flex">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Koristimo kolačiće
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Koristimo kolačiće za poboljšanje vašeg iskustva, analizu prometa i prikazivanje relevantnih oglasa.{" "}
                  <Link to="/politika-kolacica" className="text-primary hover:underline">
                    Saznaj više
                  </Link>
                </p>

                {showSettings && (
                  <div className="space-y-3 mb-4 p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground text-sm">Nužni kolačići</p>
                        <p className="text-xs text-muted-foreground">Potrebni za rad stranice</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-primary flex items-center justify-end px-1">
                        <div className="w-4 h-4 rounded-full bg-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground text-sm">Analitički kolačići</p>
                        <p className="text-xs text-muted-foreground">Google Analytics, Hotjar</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? "bg-primary justify-end" : "bg-muted justify-start"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full ${
                          preferences.analytics ? "bg-primary-foreground" : "bg-foreground"
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground text-sm">Marketinški kolačići</p>
                        <p className="text-xs text-muted-foreground">Facebook Pixel, Google Ads</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing ? "bg-primary justify-end" : "bg-muted justify-start"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full ${
                          preferences.marketing ? "bg-primary-foreground" : "bg-foreground"
                        }`} />
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {showSettings ? (
                    <>
                      <Button onClick={savePreferences} size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                        Spremi
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setShowSettings(false)} className="text-xs sm:text-sm">
                        Natrag
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={acceptAll} size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                        Prihvati sve
                      </Button>
                      <Button variant="outline" size="sm" onClick={rejectNonEssential} className="text-xs sm:text-sm">
                        Samo nužni
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setShowSettings(true)} className="text-muted-foreground text-xs sm:text-sm hidden sm:inline-flex">
                        Prilagodi
                      </Button>
                    </>
                  )}
                </div>
              </div>
              
              <button
                onClick={rejectNonEssential}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
