import React from 'react'
import "./MenuBar.css"
import { FaThList } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import FilterDropdowns from '../miscellaneous/filter/FilterDropdown'
import SortDropdown from '../miscellaneous/sort/SortDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { currentViewMode, setViewMode } from '../../features/utils/viewSlice'
const MenuBar = () => {
    const viewMode = useSelector(currentViewMode)
    const dispatch = useDispatch()
    return (
        <div className='MenuBar'>
            <div
                className='view-options'
                style={{
                    display: 'flex',
                    gap: '0.5rem'
                }}
            >
                <FaThList
                    style={{
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: viewMode === 'list'?'#333':'#CCC',
                    }}
                    onClick={() => {
                        dispatch(setViewMode('list'))
                    }}
                />
                <BsFillGridFill
                    style={{
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: viewMode === 'grid'?'#333':'#CCC'
                    }}
                    onClick={() => {
                        dispatch(setViewMode('grid'))
                    }}
                />
            </div>

            <div>
                <FilterDropdowns />
            </div>
            <div
                style=
                {{
                    marginLeft: 'auto'
                }}
            >
                <SortDropdown />
            </div>
        </div>
    )
}

export default MenuBar