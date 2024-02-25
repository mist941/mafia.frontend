import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import styles from './SearchDropDown.module.scss';
import Input from '../../atoms/Input/Input';
import Typography from '../../atoms/Typography/Typography';
import {Id} from '../../../types/common';

export type DropDownOption = {
  id: Id;
  name: string;
}

type SearchDropDownProps = {
  search: (query: string) => void;
  options: DropDownOption[];
  onSelect: (option: DropDownOption) => void;
  placeholder?: string;
}

const SearchDropDown: FC<SearchDropDownProps> = (
  {
    search,
    options,
    placeholder
  }
) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      search(searchQuery);
    }, 300);

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
      <Input onChange={onChange} placeholder={placeholder}/>
      {options?.length > 0 && (
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