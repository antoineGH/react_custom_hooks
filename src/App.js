import './App.css'
import ToggleComponent from './hooks/toggleComponent/ToggleComponent'
import TimeoutComponent from './hooks/timeoutComponent/TimeoutComponent'
import DebounceComponent from './hooks/debounceComponent/DebounceComponent'
import UpdateEffectComponent from './hooks/updateEffectComponent/UpdateEffectComponent'
import ArrayComponent from './hooks/arrayComponent/ArrayComponent'
import LocalStorageComponent from './hooks/localStorageComponent/LocalStorageComponent'
import UpdateLoggerComponent from './hooks/updateLoggerComponent/UpdateLoggerComponent'

function App() {
	return (
		<div className='App'>
			{/* <LocalStorageComponent /> */}
			<UpdateLoggerComponent />
			{/* <ToggleComponent /> */}
			{/* <TimeoutComponent /> */}
			{/* <DebounceComponent /> */}
			{/* <UpdateEffectComponent /> */}
			{/* <ArrayComponent /> */}
		</div>
	)
}

export default App
