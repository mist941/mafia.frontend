import React, {ChangeEvent, ComponentType, FC, ReactElement, useEffect, useMemo, useRef, useState} from 'react';
import styles from './SearchDropDown.module.scss';
import Input from '../../atoms/Input/Input';
import DropDownOption, {DropDownOptionType} from '../../atoms/DropDownOption/DropDownOption';
import useOutsideClicker from '../../../hooks/useOutsideClicker';
import {Id} from '../../../types/common';

type SearchDropDownProps = {
  search: (query: string) => void;
  options: DropDownOptionType[];
  selectedOptions: DropDownOptionType[];
  onSelect: (option: DropDownOptionType) => void;
  placeholder?: string;
  OptionComponent?: ComponentType<DropDownOptionType>;
  button?: string;
  icon?: ReactElement;
}

const SearchDropDown: FC<SearchDropDownProps> = (
  {
    search,
    options,
    selectedOptions,
    placeholder,
    OptionComponent = DropDownOption,
    onSelect,
    button,
    icon,
  }
) => {
  const dropDownRef = useOutsideClicker(() => {
      closeMenu();
    }
  )
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredOptions = useMemo<DropDownOptionType[]>(() => {
    const selectedOptionIds: Id[] = selectedOptions.map(option => option.id);
    return options.filter(option => !selectedOptionIds.includes(option.id));
  }, [options, selectedOptions]);

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

  const openMenu = () => {
    setOpenMenu(true);
  }

  const closeMenu = () => {
    setOpenMenu(false);
  }

  const select = (option: DropDownOptionType) => {
    onSelect(option);
    closeMenu();
  }

  return (
    <div
      className={styles.searchDropDownWrap}
      ref={dropDownRef}
    >
      <Input
        onChange={onChange}
        onFocus={openMenu}
        placeholder={placeholder}
      />
      {(isOpenMenu && filteredOptions.length > 0) && (
        <ul className={styles.menu}>
          {filteredOptions.map((option) => (
            <OptionComponent
              key={option.id}
              onSelect={select}
              button={button}
              icon={icon}
              {...option}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDropDown;