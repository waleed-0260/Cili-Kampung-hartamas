import Link from "next/link";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import type { CKLocation } from "@/types";
import { cn } from "@/lib/utils";

interface LocationCardProps {
  location: CKLocation;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-6 rounded-3xl border transition-all duration-200 hover:shadow-md",
        location.isHartamas
          ? "bg-ck-leaf text-ck-cream border-ck-leaf"
          : "bg-white border-ck-charcoal/8 hover:border-ck-leaf/30"
      )}
    >
      {/* Header */}
      <div>
        {location.isHartamas && (
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ck-gold mb-2">
            This Location
          </span>
        )}
        <h3
          className={cn(
            "font-heading text-lg font-semibold leading-snug",
            location.isHartamas ? "text-ck-cream" : "text-ck-charcoal"
          )}
        >
          {location.name}
        </h3>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-start gap-2.5">
          <MapPin
            className={cn(
              "size-3.5 mt-0.5 shrink-0",
              location.isHartamas ? "text-ck-cream/60" : "text-ck-leaf"
            )}
          />
          <span
            className={cn(
              "text-sm",
              location.isHartamas ? "text-ck-cream/80" : "text-ck-charcoal/70"
            )}
          >
            {location.address}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock
            className={cn(
              "size-3.5 shrink-0",
              location.isHartamas ? "text-ck-cream/60" : "text-ck-leaf"
            )}
          />
          <span
            className={cn(
              "text-sm",
              location.isHartamas ? "text-ck-cream/80" : "text-ck-charcoal/70"
            )}
          >
            {location.hours}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone
            className={cn(
              "size-3.5 shrink-0",
              location.isHartamas ? "text-ck-cream/60" : "text-ck-leaf"
            )}
          />
          <a
            href={`tel:${location.phone}`}
            className={cn(
              "text-sm hover:underline",
              location.isHartamas
                ? "text-ck-cream/80 hover:text-ck-cream"
                : "text-ck-charcoal/70 hover:text-ck-leaf"
            )}
          >
            {location.phone}
          </a>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-2 mt-auto pt-2">
        <Link
          href="/reservation"
          className={cn(
            "flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-colors",
            location.isHartamas
              ? "bg-ck-cream text-ck-leaf hover:bg-ck-cream/90"
              : "bg-ck-leaf text-ck-cream hover:bg-ck-leaf/90"
          )}
        >
          Reserve
        </Link>
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2.5 rounded-xl transition-colors",
            location.isHartamas
              ? "bg-ck-cream/15 text-ck-cream hover:bg-ck-cream/25"
              : "bg-ck-leaf/8 text-ck-leaf hover:bg-ck-leaf/15"
          )}
          aria-label={`View ${location.name} on map`}
        >
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}
