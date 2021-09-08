import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function LocalStorageComponent() {
	const [name, setName] = useLocalStorage('name', '')

	return <input value={name} type='text' onChange={(e) => setName(e.target.value)} />
}
