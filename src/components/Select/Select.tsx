import React, { useState, useRef } from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { useClickOutside } from '../../core/hooks/useInteractions'
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper'

export interface SelectProps {
    value: string
    onChange: (value: string) => void
    options: Array<{ value: string, label: string }>
    placeholder?: string
    disabled?: boolean
    className?: string
}

export const Select: React.FC<SelectProps> = ({
    value,
    onChange,
    options,
    disabled = false,
    className = ''
}) => {
    const { theme } = useTheme()
    const createStyle = useStyles('select')
    const [isOpen, setIsOpen] = useState(false)
    
    const selectedOption = options.find(opt => opt.value === value)

    const triggerClass = createStyle({
        width: 'auto',
        padding: '2px 8px',
        backgroundColor: 'transparent',
        color: theme.colors.textSecondary,
        border: '1px solid transparent',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        '&:hover': disabled ? undefined : {
            backgroundColor: theme.colors.border,
            color: theme.colors.text,
        },
        '&::after': {
            content: '"▼"',
            marginLeft: theme.spacing.sm,
            fontSize: '10px',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'none',
        }
    })

    const dropdownClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '6px',
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.5)`,
        marginTop: '4px',
        minWidth: '180px',
        zIndex: 100,
        padding: '4px',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    })

    const optionClass = createStyle({
        padding: '6px 10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        color: theme.colors.text,
        borderRadius: '4px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: theme.colors.primary,
            color: '#fff',
        },
         '&[data-selected="true"]': {
            fontWeight: '500',
        },
    })

    const handleSelect = (optionValue: string) => {
        if (!disabled) {
            onChange(optionValue)
            setIsOpen(false)
        }
    }

    return (
       <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <PopperTrigger>
                 <button className={triggerClass} disabled={disabled}>
                    {selectedOption?.label}
                </button>
            </PopperTrigger>
            <PopperContent className={dropdownClass}>
                 {options.map((option) => (
                    <div
                        key={option.value}
                        className={optionClass}
                        onClick={() => handleSelect(option.value)}
                        data-selected={option.value === value}
                    >
                        {option.label}
                    </div>
                ))}
            </PopperContent>
       </Popper>
    )
}

export default Select