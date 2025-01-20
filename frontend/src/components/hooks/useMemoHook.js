import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const item = [
        'Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Peach', 'Mango', 'Watermelon',
        'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Kiwi', 'Papaya', 'Avocado'
    ];
    const [term, setTerm] = useState("");
    const items = [
        'Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Peach', 'Mango', 'Watermelon',
        'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Kiwi', 'Papaya', 'Avocado'
    ];

    // Without Memo
    const filterdItems = items.filter((i) => i.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log("===>filteredItems");

    const fl = useMemo(() => {
        console.log('Filtering items with useMemo...');
        return item.filter((i) => i.toLowerCase().includes(term.toLowerCase()));
    }, [term])

    return (
        <>
            <div className='mt-4 mb-4'>
                <h1>useMemoHook</h1>
                <p>useMemo can be especially useful for preventing expensive calculations, such as filtering, sorting, or complex data transformations, from being re-executed on every render unless necessary. However, it's important to use it judiciously, as it has its own overhead (storing the memoized value).</p>
                <div className="flex mb-4">
                    <div className="w-1/2 h-12">
                        <input className='mt-8 mb-8 border-black border-solid' type="text" placeholder="Search for a fruit without memo" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <ul>
                            {
                                filterdItems.map((i, key) => (
                                    <li key={key}>{i}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-1/2 h-12">
                        <input className='mt-8 mb-8 border-black border-solid' type="text" placeholder="Search for a fruit with memo" value={term} onChange={(e) => setTerm(e.target.value)} />
                        <ul>
                            {
                                fl.map((i, key) => (
                                    <li key={key}>{i}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseMemoHook