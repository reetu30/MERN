import React from 'react'

const Message = (data) => {
    const { type, message } = data.prop;
    return (
        <div>
            { type === 'success' && (<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium">Success alert!</span> {message}
            </div>)}

            { type === 'info' && (<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span className="font-medium">Info alert!</span> {message}
            </div>)}
            
            { type === 'error' && (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Alert!</span> {message}
            </div>)}
            
            { message === 'warning' && (<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <span className="font-medium">Warning alert!</span> {message}
            </div>)}
            
        </div>
    )
}

export default Message