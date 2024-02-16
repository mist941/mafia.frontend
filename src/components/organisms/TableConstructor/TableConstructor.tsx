import React, {ReactNode} from 'react';
import styles from './TableConstructor.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import Typography from '../../atoms/Typography/Typography';
import Button, {ButtonProps} from '../../atoms/Button/Button';

type TableSetting<OptionType> = {
  name: string;
  render: (option: OptionType) => ReactNode;
};

type TableConstructorProps<OptionType> = {
  options: OptionType[],
  settings: TableSetting<OptionType>[],
  name: string;
  button?: ButtonProps;
};

const TABLE_PADDING = '12px 24px';

const TableConstructor = <OptionType, >(
  {
    name,
    button,
    options,
    settings
  }: TableConstructorProps<OptionType>
) => {
  const columnNames = settings.map(setting => setting.name);
  const columnWidthInPercent = `${100 / settings.length}%`;

  return (
    <div className={styles.tableConstructor}>
      <EssentialBlock padding={TABLE_PADDING} className={styles.header}>
        <Typography.Heading5>{name}</Typography.Heading5>
        {button && <Button {...button}/>}
      </EssentialBlock>
      <EssentialBlock padding={TABLE_PADDING}>
        {columnNames.map(name => (
          <div className={styles.column} style={{width: columnWidthInPercent}}>
            <Typography.Paragraph size='s' color='disable'>{name}</Typography.Paragraph>
          </div>
        ))}
      </EssentialBlock>
      <EssentialBlock padding={TABLE_PADDING}>
        {options.map((option, index) => (
          <div className={styles.column} style={{width: columnWidthInPercent}}>
            {settings[index].render(option)}
          </div>
        ))}
      </EssentialBlock>
    </div>
  );
};

export default TableConstructor;