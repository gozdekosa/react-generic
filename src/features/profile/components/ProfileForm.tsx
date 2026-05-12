import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSchema,
  type ProfileFormData,
} from "../schema/profileSchema";
import FormInput from "../../../shared/components/form/FormInput";
import Button from "../../../shared/components/ui/Button";
import useUpdateMe from "../hooks/useUpdateMe";
import type { User } from "../types/profile";

type Props = {
    user: User;
}

const ProfileForm = ({ user }: Props) => {
    const {handleUpdate, loading} = useUpdateMe();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),

        defaultValues: {
        name: user.name,
        email: user.email,
        username: user.username,
        },
    });

    const onSubmit = async (
        data: ProfileFormData
    ) => {
        await handleUpdate(data);

        alert("Profil güncellendi!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div className="space-y-4">
                <div>
                    <FormInput
                        label="Ad Soyad"
                        {...register("name")}
                        error={errors.name?.message}
                    />
                </div>
                <div>
                    <FormInput
                        label="Email:"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                </div>
                <div>
                    <FormInput
                        label="Kullanıcı Adı:"
                        {...register("username")}
                        error={errors.username?.message}
                    />
                </div>
                <Button type="submit" disabled={loading}>
                    {loading ? "Güncelleniyor..." : "Profili Güncelle"}
                </Button>
                </div>
            </form>
        </div>
    );
}

export default ProfileForm;