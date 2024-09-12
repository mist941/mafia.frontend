import React, {ReactNode} from 'react';
import styles from './TableConstructor.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Typography from '../../atoms/Typography/Typography';
import classNames from 'classnames';

type TableSetting<OptionType> = {
  name: string;
  render: (option: OptionType) => ReactNode;
};

type TableConstructorProps<OptionType> = {
  options: OptionType[],
  settings: TableSetting<OptionType>[],
  disabledRow?: (option: OptionType) => boolean;
  rowExpansion?: (option: OptionType) => ReactNode;
};

const TABLE_PADDING = '12px 24px';


const TableConstructor = <OptionType, >(
  {
    options,
    settings,
    disabledRow,
    rowExpansion
  }: TableConstructorProps<OptionType>
) => {
  const columnNames = settings.map(setting => setting.name);
  const columnWidthInPercent = `${100 / settings.length}%`;
  let expansionSafeAreaWidth = 0;

  if (rowExpansion) {
    expansionSafeAreaWidth = 100;
  }

  return (
    <div className={styles.tableConstructor}>
      <EssentialBlock padding={TABLE_PADDING}>
        <div
          className={styles.headerWrap}
          style={{width: `calc(100% - ${expansionSafeAreaWidth}px)`}}
        >
          {columnNames.map((name, index) => (
            <div key={index} className={styles.column} style={{width: columnWidthInPercent}}>
              <Typography.Paragraph size='s' color='disable'>{name}</Typography.Paragraph>
            </div>
          ))}
        </div>
      </EssentialBlock>
      {options.map((option, optionIndex) => (
        <EssentialBlock
          key={optionIndex}
          padding={TABLE_PADDING}
          className={classNames(
            styles.row,
            {[styles.disabled]: disabledRow && disabledRow(option)}
          )}
        >
          <div
            className={styles.columnsWrap} 
            style={{width: `calc(100% - ${expansionSafeAreaWidth}px)`}}
          >
            {settings.map((setting, settingIndex) => (
              <div key={settingIndex} className={styles.column} style={{width: columnWidthInPercent}}>
                {setting.render(option)}
              </div>
            ))}
          </div>
          {rowExpansion && (
            <div
              className={styles.rowExpansion}
              style={{width: expansionSafeAreaWidth}}
            >
              {rowExpansion(option)}
            </div>
          )}
        </EssentialBlock>
      ))}
    </div>
  );
};

export default TableConstructor;