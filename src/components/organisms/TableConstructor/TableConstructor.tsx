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
};

const TABLE_PADDING = '12px 24px';

const TableConstructor = <OptionType, >(
  {
    options,
    settings,
    disabledRow
  }: TableConstructorProps<OptionType>
) => {
  const columnNames = settings.map(setting => setting.name);
  const columnWidthInPercent = `${100 / settings.length}%`;

  return (
    <div className={styles.tableConstructor}>
      <EssentialBlock padding={TABLE_PADDING} className={styles.header}>
        {columnNames.map((name, index) => (
          <div key={index} className={styles.column} style={{width: columnWidthInPercent}}>
            <Typography.Paragraph size='s' color='disable'>{name}</Typography.Paragraph>
          </div>
        ))}
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
          {settings.map((setting, settingIndex) => (
            <div key={settingIndex} className={styles.column} style={{width: columnWidthInPercent}}>
              {setting.render(option)}
            </div>
          ))}
        </EssentialBlock>
      ))}
    </div>
  );
};

export default TableConstructor;