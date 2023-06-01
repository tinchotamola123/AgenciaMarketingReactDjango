import { connect } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavLink, Link } from 'react-router-dom';
import loading_dots from 'assets/img/loading-dots.gif';




function NavBar() {

    const [loading, setLoading] = useState(true)

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('shadow-navbar');
            }
        }
    }

    const [open, setOpen] = useState(false)

    return (
        <nav id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img
                            src={"https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png"}
                            width={160}
                            height={160}
                            className='' />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Casos
                        </NavLink>
                        <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Servicios
                        </NavLink>
                        <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Nosotros
                        </NavLink>
                        <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Carreras
                        </NavLink>
                        <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Blog
                        </NavLink>
                        <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border.white hover:border-orange-500 transition duration-300 ease-in-out mx-4">
                            Contacto
                        </NavLink>
                        <Link to={'https://wa.me/261723130'}>
                        <button 
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm hover:transition hover:duration-300 hover:ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                            Hire Us
                            <img src={loading_dots} className='w-7 h-2 mt-0.5 ml-2' />
                        </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img
                            src={"https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png"}
                            width={160}
                            height={160}
                            className='' />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">

                        <div className="">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="">
                                    {
                                open ?
                                    <i onClick={() => {
                                        setOpen(false)
                                    }} className='bx bx-x text-4xl'></i>
                                    :
                                    <i onClick={() => {
                                        setOpen(true)
                                    }} className='bx bx-menu text-4xl'></i>
                            }

                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/casos">
                                                    <button
                                                        className={`${active ? 'bg-orange-button text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Casos
                                                    </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/servicios">
                                                    <button
                                                        className={`${active ? 'bg-orange-button text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Servicios
                                                    </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/nosotros">
                                                    <button
                                                        className={`${active ? 'bg-orange-button text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Nosotros
                                                    </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/carreras">
                                                    <button
                                                        className={`${active ? 'bg-orange-button text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <i
                                                                className="mr-2 h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Carrera
                                                    </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/blog">
                                                    <button
                                                        className={`${active ? 'bg-orange-button text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <i
                                                                className="mr-2 h-5 w-5 text-violet-400"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <i
                                                                className="mr-2 h-5 w-5 text-violet-400"
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        Blog
                                                    </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
})(NavBar);

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}