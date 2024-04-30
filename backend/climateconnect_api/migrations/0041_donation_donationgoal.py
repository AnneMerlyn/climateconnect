# Generated by Django 2.2.13 on 2020-12-03 12:06

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("climateconnect_api", "0040_remove_userprofile_email_updates_on_projects"),
    ]

    operations = [
        migrations.CreateModel(
            name="Donation",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "donor_name",
                    models.CharField(
                        blank=True,
                        help_text="Donor name",
                        max_length=512,
                        null=True,
                        verbose_name="Donor Name",
                    ),
                ),
                (
                    "donation_amount",
                    models.FloatField(
                        default=0.0,
                        help_text="Amount donated in €",
                        verbose_name="Donation amount in €",
                    ),
                ),
                (
                    "is_recurring",
                    models.BooleanField(
                        blank=True,
                        default=False,
                        help_text="Check if the donation is recurring monthly",
                        null=True,
                        verbose_name="Donation recurring monthly",
                    ),
                ),
                (
                    "date_first_received",
                    models.DateTimeField(
                        help_text="Date and time when the donation was first received",
                        verbose_name="Date first received",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Time when donation was created",
                        verbose_name="Created At",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Time when donation was updated",
                        verbose_name="Updated At",
                    ),
                ),
            ],
            options={
                "verbose_name": "Donation",
                "verbose_name_plural": "Donations",
                "ordering": ["-id"],
            },
        ),
        migrations.CreateModel(
            name="DonationGoal",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="Goal name, e.g. 'December goal'",
                        max_length=512,
                        verbose_name="Goal name",
                    ),
                ),
                (
                    "description",
                    models.CharField(
                        help_text="The description of the goal",
                        max_length=2048,
                        verbose_name="Goal description",
                    ),
                ),
                (
                    "start_date",
                    models.DateTimeField(
                        help_text="Date and time when the goal starts",
                        verbose_name="Start date",
                    ),
                ),
                (
                    "end_date",
                    models.DateTimeField(
                        help_text="Date and time when the goal ends",
                        verbose_name="End date",
                    ),
                ),
                (
                    "amount",
                    models.PositiveIntegerField(
                        help_text="The donated amount in € we want to reach with this goal between start data and end date",
                        verbose_name="Goal Amount",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Time when donation was created",
                        verbose_name="Created At",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Time when donation was updated",
                        verbose_name="Updated At",
                    ),
                ),
            ],
            options={
                "verbose_name": "DonationGoal",
                "verbose_name_plural": "DonationGoals",
                "ordering": ["-id"],
            },
        ),
    ]
