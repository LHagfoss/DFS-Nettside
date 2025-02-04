import { notFound } from "next/navigation"
import skyttere from "@/data/skyttere.json"

export default async function SelectedBanerPage({ params }: { params: { ids: string } }) {
    const { ids } = await params
    const decodedIds = decodeURIComponent(ids)
    console.log('Raw IDs from URL:', decodedIds)
    
    const selectedIds = decodedIds.split(',')
        .filter(id => id.length > 0)
        .map(id => {
            const parsed = parseInt(id.trim())
            return isNaN(parsed) ? null : parsed
        })
        .filter((id): id is number => id !== null)
    
    console.log('Parsed Selected IDs:', selectedIds)
    
    const selectedSkyttere = selectedIds.map(id => 
        skyttere.find(skytte => skytte.id === id)
    ).filter((skytte): skytte is typeof skyttere[0] => skytte !== undefined)
    
    console.log('Selected skyttere:', selectedSkyttere)

    if (selectedSkyttere.length === 0) {
        notFound()
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-8">Selected Baner ({selectedSkyttere.length} users)</h1>
            
            <div className="mb-4 p-4 bg-yellow-100">
                <p>URL Parameters: {ids}</p>
                <p>Parsed IDs: {JSON.stringify(selectedIds)}</p>
                <p>Found Users: {selectedSkyttere.map(s => s.id).join(', ')}</p>
            </div>

            <div className="flex flex-wrap gap-4">
                {skyttere.map(skytte => (
                    <div 
                        key={skytte.id}
                        className={`bg-white p-4 rounded-lg shadow-lg transition-all duration-300 ${
                            selectedIds.includes(skytte.id)
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 h-0 w-0 overflow-hidden"
                        }`}
                    >
                        <h2 className="text-xl font-bold mb-2">{skytte.name}</h2>
                        <div className="space-y-1">
                            <p>ID: {skytte.id}</p>
                            <p>Bane: {skytte.bane}</p>
                            <p>Skudd: {skytte.skudd}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}