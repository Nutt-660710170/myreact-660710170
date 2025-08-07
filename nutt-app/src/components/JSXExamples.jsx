import React from 'react';

function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'Nutt';
    const age = 21;

    const currentYear = new Date().getFullYear();
    const user = {
        firstName: 'Nutt',
        lastName: 'Singsatit',
        age: 21,
        hobbies: ['เล่นเกม', 'ฟังเพลง', 'ดูYoutube']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>JSX Example</h1>
            
            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ{age}</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>

            <section>
                <h2>Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>
                <button
                    onClick={() => alert('Button Clicked!')}
                    onMouseEnter={() => console.log('Mouse Entered!')}
                >
                    click here
                </button>


            </section>

        </div>
    );
    

}
export default JSXExamples;