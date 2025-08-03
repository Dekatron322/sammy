"use client"

import { useEffect, useRef, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api"

// Google Maps API key - replace with your own
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "0.5rem",
}

// Initial map center (show the whole world)
const center = {
  lat: 20,
  lng: 0,
}

// Service locations with coordinates
const services = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Enterprise-grade web applications with modern frameworks.",
    position: { lat: 51.5074, lng: -0.1278 }, // London
    continent: "EUROPE",
    icon: "💻",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Custom online stores with secure payment integration.",
    position: { lat: -23.5505, lng: -46.6333 }, // São Paulo
    continent: "SOUTH AMERICA",
    icon: "🛒",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking",
    description: "Secure mobile banking solutions for financial inclusion.",
    position: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    continent: "AFRICA",
    icon: "📱",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Custom AI and machine learning implementations.",
    position: { lat: 12.9716, lng: 77.5946 }, // Bangalore
    continent: "ASIA",
    icon: "🤖",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration.",
    position: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    continent: "NORTH AMERICA",
    icon: "☁️",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design for global markets.",
    position: { lat: 1.3521, lng: 103.8198 }, // Singapore
    continent: "ASIA",
    icon: "🎨",
  },
]

export default function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [activeService, setActiveService] = useState<string | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const updateScrollData = () => {
        setScrollPosition(container.scrollLeft)
        setMaxScroll(container.scrollWidth - container.clientWidth)
      }

      updateScrollData()
      container.addEventListener("scroll", updateScrollData)

      window.addEventListener("resize", updateScrollData)

      return () => {
        container.removeEventListener("scroll", updateScrollData)
        window.removeEventListener("resize", updateScrollData)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  const gradientPercentage = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollPosition / maxScroll) * 100)) : 0
  const isLeftDisabled = scrollPosition <= 0
  const isRightDisabled = scrollPosition >= maxScroll

  // Fit map bounds to show all markers
  const fitMapBounds = () => {
    if (map && services.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      services.forEach((service) => {
        bounds.extend(service.position)
      })
      map.fitBounds(bounds)

      // Add some padding
      const zoom = map.getZoom()
      if (zoom && zoom > 3) {
        map.setZoom(zoom - 1)
      }
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <div className="paddings mt-24 flex flex-col">
        <h1 className="mb-8 text-4xl font-bold">Our Global Services</h1>

        {/* Google Map Container */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={2}
              onLoad={(map) => {
                setMap(map)
                setTimeout(fitMapBounds, 500) // Small delay to ensure map is fully loaded
              }}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                ],
              }}
            >
              {services.map((service) => (
                <Marker
                  key={service.id}
                  position={service.position}
                  onClick={() => setActiveService(service.id)}
                  label={{
                    text: service.icon,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {activeService === service.id && (
                    <InfoWindow position={service.position} onCloseClick={() => setActiveService(null)}>
                      <div className="max-w-xs">
                        <div className="mb-2 flex items-center">
                          <span className="mr-2 text-lg">{service.icon}</span>
                          <h3 className="text-lg font-bold">{service.title}</h3>
                        </div>
                        <p className="mb-2 text-gray-600">{service.description}</p>
                        <div className="text-sm text-gray-500">Region: {service.continent}</div>
                        <button className="mt-2 rounded bg-blue-500 px-3 py-1 text-sm text-white transition hover:bg-blue-600">
                          Learn More
                        </button>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Services list */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Our Services by Region</h2>
          <div className="relative">
            <div ref={scrollContainerRef} className="scrollbar-hide flex space-x-6 overflow-x-auto py-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`w-64 flex-shrink-0 cursor-pointer rounded-lg p-6 shadow-md transition ${
                    activeService === service.id ? "bg-blue-500 text-white" : "bg-white hover:shadow-lg"
                  }`}
                  onClick={() => {
                    setActiveService(service.id)
                    if (map) {
                      map.panTo(service.position)
                      map.setZoom(8)
                    }
                  }}
                >
                  <div className="mb-3 flex items-center">
                    <span className="mr-3 text-2xl">{service.icon}</span>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className={activeService === service.id ? "text-blue-100" : "text-gray-600"}>
                    {service.description}
                  </p>
                  <div className={`mt-2 text-sm ${activeService === service.id ? "text-blue-200" : "text-gray-500"}`}>
                    {service.continent}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll buttons */}
            {!isLeftDisabled && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -ml-4 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100"
                aria-label="Scroll left"
              >
                &lt;
              </button>
            )}
            {!isRightDisabled && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -mr-4 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100"
                aria-label="Scroll right"
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
