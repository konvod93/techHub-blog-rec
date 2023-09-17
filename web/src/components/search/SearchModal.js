import React, { useContext, useState } from 'react';
import { SearchModalContext } from '../../context/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import { MdClose } from 'react-icons/md';
import SearchField from './SearchField';

function Search() {
    const { isSearchModalOpen, closeSearchModal } = useContext(SearchModalContext);
    const [searchQuery, setSearchQuery] = useState('');
    const handleOnFocus = () => {
        console.log('focused')
    }

    if (!isSearchModalOpen) return null;

    return <SearchModalStyles>
        <div className="modal__container">
            <ActionButton className="close"  onClick={() => closeSearchModal()}>
                <MdClose />
            </ActionButton>
            <SearchField 
            vaulue={searchQuery}
            setValue={setSearchQuery}
            onFocus={handleOnFocus}
            />
        </div>
    </SearchModalStyles>;    
}

export default Search;
