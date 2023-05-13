'use client'
import { useFieldArray, useForm } from "react-hook-form"


export interface FormProps {
    personalDetails: {
        name: string
        profession: string
        motivation: string
        phone: string
        email: string
        address: {
            country: string
            city: string
            countryCode: string
            postCode: string
        }
    }
    socials: {
        linkedin: string
        github: string
        twitter: string
        facebook: string
        instagram: string
    }
    // skills: {
    //     languages: string[]
    //     frameworks: string[]
    //     tools: string[]
    // }
    skills: {
        name: string
    }[]
    experiences: {
        title: string
        companyName: string
        location: string
        from: string
        to: string
        description: string
    }[]
    projects: {
        title: string
        description: string
        link: string
        image: string
    }[]
    educations: {
        title: string
        school: string
        location: string
        from: string
        to: string
        description: string
    }[]
    achievements: {
        title: string
        description: string
    }[]
    hobbies: {
        title: string
        description: string
    }[]
    languages: {
        title: string
        description: string
    }[]
    references: {
        name: string
        position: string
        company: string
        phone: string
        email: string
    }[]
}

const Form = ({ submit }: { submit: any }) => {

    const { register, handleSubmit, control } = useForm<FormProps>({
        defaultValues: {
            experiences: [
                {
                    title: "",
                    companyName: "",
                    location: "",
                    from: "",
                    to: "",
                    description: "",
                },
            ],
            educations: [{
                title: '',
                school: '',
                location: '',
                from: '',
                to: '',
                description: ''
            }],
            skills: [{ name: '' }]
        }
    })
    const { fields: experienceFields, append, remove } = useFieldArray({
        control,
        name: "experiences",
    })
    const { fields: educationFields, append: addEducationField, remove: removeEducationField } = useFieldArray({
        control,
        name: "educations",
    })
    const { fields: skillFields, append: addSkillFields, remove: removeSkillFields } = useFieldArray({
        control,
        name: 'skills'
    })

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col  w-[1440px] bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-2"
        >
            {/* personal details */}
            <details open>
                <summary className="font-semibold text-lg">Personal Details</summary>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="name"
                        {...register("personalDetails.name")}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="profession"
                    >
                        Current Profession
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="profession"
                        type="text"
                        placeholder="Software Engineer"
                        {...register("personalDetails.profession")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="motivation"
                    >
                        Motivation/Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="motivation"
                        type="text"
                        placeholder="Write you motivation"
                        {...register("personalDetails.motivation")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="phone"
                    >
                        Phone
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder="+88 01780064264"
                        {...register("personalDetails.phone")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="email@gmail.com"
                        {...register("personalDetails.email")}
                    />
                </div>

                <details>
                    <summary className="font-semibold text-md">Address</summary>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                            htmlFor="country"
                        >
                            Country
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            type="text"
                            placeholder="Bangladesh"
                            {...register("personalDetails.address.country")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            type="text"
                            placeholder="Dhaka"
                            {...register("personalDetails.address.city")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                            htmlFor="countryCode"
                        >
                            Country Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="countryCode"
                            type="text"
                            placeholder="+88"
                            {...register("personalDetails.address.countryCode")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                            htmlFor="postCode"
                        >
                            Post Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="postCode"
                            type="text"
                            placeholder="1743"
                            {...register("personalDetails.address.postCode")}
                        />
                    </div>
                </details>
            </details>
            {/* social */}
            <details>
                <summary className="font-semibold text-lg">Socials</summary>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="linkedin"
                    >
                        Linkedin
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="linkedin"
                        type="text"
                        placeholder='xyz.linkedin'
                        {...register("socials.linkedin")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="facebook"
                    >
                        Github
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="github"
                        type="text"
                        placeholder='hasannayeem71'
                        {...register("socials.github")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="twitter"
                    >
                        Twitter
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="twitter"
                        type="text"
                        placeholder='@hasannayeem71'
                        {...register("socials.twitter")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="instagram"
                    >
                        Instagram
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="instagram"
                        type="text"
                        placeholder='@hasannayeem71'
                        {...register("socials.instagram")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                        htmlFor="facebook"
                    >
                        Facebook
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="facebook"
                        type="text"
                        placeholder='xyz.facebook'
                        {...register("socials.facebook")}
                    />
                </div>


            </details>
            {/* work experiences */}
            <details>
                <summary className="font-semibold text-lg">Work experiences</summary>

                {experienceFields.map((item, index) => {
                    return <div key={item.id} className="ms-3">
                        <p>Experiences no {index + 1}</p>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                htmlFor={`position${index}`}
                            >
                                Position
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`position${index}`}
                                type="text"
                                placeholder="Web developer"
                                {...register(`experiences.${index}.title`)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                htmlFor={`companyName${index}`}
                            >
                                Company Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`companyName${index}`}
                                type="text"
                                placeholder="BD JOBS LTD."
                                {...register(`experiences.${index}.companyName`)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                htmlFor={`companyLocation${index}`}
                            >
                                Location
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`companyLocation${index}`}
                                type="text"
                                placeholder="Dhaka, Bangladesh"
                                {...register(`experiences.${index}.location`)}
                            />
                        </div>
                        <div className="sm:flex">
                            <div className="mb-4 w-full sm:me-1">
                                <label
                                    className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                    htmlFor={`startDate${index}`}
                                >
                                    From
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={`startDate${index}`}
                                    type="date"
                                    {...register(`experiences.${index}.from`)}
                                />
                            </div>
                            <div className="mb-4 w-full sm:ms-1">
                                <label
                                    className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                    htmlFor={`endDate${index}`}
                                >
                                    To
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={`endDate${index}`}
                                    type="date"
                                    {...register(`experiences.${index}.to`)}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                htmlFor={`description${index}`}
                            >
                                Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={`description${index}`}
                                type="text"
                                placeholder="I worked as a web developer"
                                {...register(`experiences.${index}.description`)}
                            />
                        </div>
                        <div className="flex sm:flex-row flex-col justify-between items-center">
                            {index === experienceFields.length - 1 && <button className="py-1 px-4 rounded-md bg-teal-600 "
                                onClick={() => {
                                    append({
                                        title: "",
                                        companyName: "",
                                        location: "",
                                        from: "",
                                        to: "",
                                        description: "",
                                    })
                                }}
                            >Add more experience</button>}
                            {index > 0 && <button className="py-1 px-4 rounded-md bg-red-600 mt-2"
                                onClick={() => {
                                    remove(index)
                                }}
                            >remove experience</button>}
                        </div>
                    </div>
                })}

            </details>
            {/* education */}
            <details>
                <summary className="font-semibold text-lg">Education</summary>
                {
                    educationFields.map((item, index) => {
                        return <div key={item.id}>
                            <p>Education no {index + 1}</p>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                    htmlFor="degree"
                                >
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="degree"
                                    type="text"
                                    placeholder="BSC in CSE"
                                    {...register(`educations.${index}.title`)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                    htmlFor="institute"
                                >
                                    Institute
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="institute"
                                    type="text"
                                    placeholder="Manarat international university"
                                    {...register(`educations.${index}.school`)}
                                />
                            </div>
                            <div className="sm:flex">
                                <div className="mb-4 w-full sm:me-1">
                                    <label
                                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                        htmlFor="startDateEducation"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="startDateEducation"
                                        type="date"
                                        {...register(`educations.${index}.from`)}
                                    />
                                </div>
                                <div className="mb-4 w-full sm:ms-1">
                                    <label
                                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                        htmlFor="endDateEducation"

                                    >
                                        End Date
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="endDateEducation"
                                        type="date"
                                        {...register(`educations.${index}.to`)}
                                    />
                                </div>
                                <div className="mb-4 w-full sm:ms-1">
                                    <label
                                        className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                        htmlFor="edudesc"

                                    >
                                        Description
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="edudesc"
                                        type="text"
                                        {...register(`educations.${index}.description`)}
                                    />
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col justify-between items-center">
                                {index === educationFields.length - 1 && <button className="py-1 px-4 rounded-md bg-teal-600 "
                                    onClick={() => {
                                        addEducationField({
                                            title: '',
                                            school: '',
                                            location: '',
                                            from: '',
                                            to: '',
                                            description: ''
                                        })
                                    }}
                                >Add more education</button>}
                                {index > 0 && <button className="py-1 px-4 rounded-md bg-red-600 mt-2"
                                    onClick={() => {
                                        removeEducationField(index)
                                    }}
                                >Remove this education</button>}
                            </div>
                        </div>
                    })
                }

            </details>
            {/* skills */}
            <details>
                <summary className="font-semibold text-lg">Skills</summary>
                {skillFields.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <p>Skill no {index + 1}</p>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 dark:text-white text-sm font-bold mb-2 "
                                    htmlFor={"skill" + index}
                                >
                                    Skill name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={"skill" + index}
                                    type="text"
                                    placeholder='React'
                                    {...register(`skills.${index}.name`)}
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col justify-between items-center">
                                {index === skillFields.length - 1 && <button className="py-1 px-4 rounded-md bg-teal-600 mb-3"
                                    onClick={() => {
                                        addSkillFields({
                                            name: ''
                                        })
                                    }}
                                >Add more skill</button>}
                                {index > 0 && <button className="py-1 px-4 rounded-md bg-red-600 mt-2 mb-3"
                                    onClick={() => {
                                        removeSkillFields(index)
                                    }}
                                >Remove this skill</button>}
                            </div>
                        </div>
                    )
                })
                }
            </details>
            <button type="submit" className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-md">Create</button>
        </form >
    )
}

export default Form