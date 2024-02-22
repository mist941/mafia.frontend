import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import styles from './SearchDropDown.module.scss';
import Input from '../../atoms/Input/Input';
import Typography from '../../atoms/Typography/Typography';
import {Id} from '../../../types/common';

type SearchItem = {
  id: Id;
  name: string;
}

type SearchDropDownProps = {
  search: (query: string) => Promise<SearchItem[]> | SearchItem[];
}

const SearchDropDown: FC<SearchDropDownProps> = ({search}) => {
  const [foundItems, setFoundItems] = useState<SearchItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      if (searchQuery) {
        const searchResults = await search(searchQuery);
        setFoundItems(searchResults);
      } else {
        setFoundItems([]);
      }
    }, 500);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchQuery]);


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }

  return (
    <div className={styles.searchDropDownWrap}>
      <Input onChange={onChange}/>
      {foundItems.length > 0 && (
        <div>
          <Typography.Heading1>
            found
          </Typography.Heading1>
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;