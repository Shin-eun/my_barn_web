import React, { useState, useRef } from 'react';
import Calendar from '@toast-ui/react-calendar'; //https://github.com/nhn/tui.calendar/blob/main/docs/ko/apis/calendar.md
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

//icon
import { ReactComponent as IconLeft } from "../../assets/icons/ic_chevron_left.svg";
import { ReactComponent as IconRight } from "../../assets/icons/ic_chevron_right.svg";

//style
import * as S from "./Calendar.styled";

const CalendarView = () => {
    const [viewDate, setViewDate] = useState(`${new Date().getFullYear()}년 ${new Date().getMonth()+1}월`);
    const calRef = useRef();
    const calendars = [
        {
            id: '0',
            name: 'Private',
            bgColor: '#9e5fff',
            borderColor: '#9e5fff'
        },
        {
            id: '1',
            name: 'Company',
            bgColor: '#00a9ff',
            borderColor: '#00a9ff'
        }
    ]
    const schedules = [
        {
            id: '1',
            calendarId: 'cal1',
            title: 'Lunch',
            category: 'time',
            start: '2023-03-28T12:00:00',
            end: '2023-03-28T13:30:00',
            name: 'Private',
            backgroundColor: '#9e5fff',
            borderColor: '#9e5fff',
            isReadOnly: true
        },
        {
            id: '2',
            calendarId: 'cal1',
            title: 'Coffee Break',
            category: 'time',
            start: '2023-03-28T15:00:00',
            end: '2023-03-28T15:30:00',
            name: 'Company',
            backgroundColor: '#00a9ff',
            borderColor: '#00a9ff',
            isReadOnly: true
        },
        {
            id: '3',
            calendarId: 'cal1',
            title: 'Lunch',
            category: 'time',
            start: '2023-03-28T12:00:00',
            end: '2023-03-28T13:30:00',
            name: 'Private',
            backgroundColor: '#9e5fff',
            borderColor: '#9e5fff',
            isReadOnly: true
        },
        {
            id: '4',
            calendarId: 'cal1',
            title: 'Coffee Break',
            category: 'time',
            start: '2023-03-28T15:00:00',
            end: '2023-03-28T15:30:00',
            name: 'Company',
            backgroundColor: '#00a9ff',
            borderColor: '#00a9ff',
            isReadOnly: true
        },
    ];

    const onAfterRenderEvent = (event) => {
        console.log(event);
    };

    const template = {
        milestone(event) {
            return `<span style="color: #000; background-color: ${event.backgroundColor};">${event.title}</span>`;
        }
    };

    const handleClickNextButton = () => {
        const calendarInstance = calRef.current.getInstance();
        calendarInstance.next();
        handleClickDate(calendarInstance);
    };

    const handleClickPrevButton = () => {
        const calendarInstance = calRef.current.getInstance();
        calendarInstance.prev();
        handleClickDate(calendarInstance);
    };

    const handleClickDate = (instance) => {
        const y = new Date(instance.getDate()).getFullYear();
        const m = new Date(instance.getDate()).getMonth()+1
        setViewDate(`${y}년 ${m}월`)
    }

   
    return (
        <S.Calendar>
            <S.CalendarHeader>
                <S.Btn onClick={handleClickPrevButton}><IconLeft /></S.Btn>
                {viewDate}
                <S.Btn onClick={handleClickNextButton}><IconRight /></S.Btn>
            </S.CalendarHeader>
            <Calendar
                ref={calRef}
                // usageStatistics={false}
                view="month"
                month={{
                    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                    // visibleWeeksCount: 3,
                }}
                // calendars={calendars}
                // schedules={schedules}
                events={schedules}
                onAfterRenderEvent={onAfterRenderEvent}
                template={template}
                useDetailPopup
                useCreationPopup
                week={{
                    showTimezoneCollapseButton: true,
                    timezonesCollapsed: true
                }}
                taskView={true}
                scheduleView={ ['allday', 'time']}
            />
        </S.Calendar>
    );
}

export default CalendarView;