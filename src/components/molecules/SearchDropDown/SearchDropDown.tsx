import React, {ChangeEvent, ComponentType, FC, useEffect, useRef, useState} from 'react';
import styles from './SearchDropDown.module.scss';
import Input from '../../atoms/Input/Input';
import DropDownOption, {DropDownOptionType} from '../../atoms/DropDownOption/DropDownOption';



type SearchDropDownProps = {
  search: (query: string) => void;
  options: DropDownOptionType[];
  onSelect: (option: DropDownOptionType) => void;
  placeholder?: string;
  OptionComponent?: ComponentType<DropDownOptionType>;
  button?: string;
}

const SearchDropDown: FC<SearchDropDownProps> = (
  {
    search,
    options,
    placeholder,
    OptionComponent = DropDownOption,
    onSelect,
    button
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
          {options.map((option, index) => (
            <OptionComponent
              key={index}
              onSelect={onSelect}
              button={button}
              {...option}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;